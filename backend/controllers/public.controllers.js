import asyncHandler from "../middlewares/asyncHandler.js";
import PharmacyModel from "../models/pharmacyModel.js";
import MedicationModel from "../models/medicationModel.js";

// GET ALL DIVISION/ LOCATIONS  /api/v0/locations
export const getTowns = asyncHandler(async (req, res) => {
  const locations = await Pharmacy.aggregate([
    {
      $group: {
        _id: null,
        towns: { $addToSet: "$location.town" },
        subdivisions: { $addToSet: "$location.subdivision" },
      },
    },
  ]);

  const cameroonLocations = {
    towns: [
      "Douala",
      "Yaoundé",
      "Bafoussam",
      "Bamenda",
      "Garoua",
      "Maroua",
      "Ngaoundéré",
      "Bertoua",
      "Ebolowa",
      "Kumba",
      "Limbe",
      "Kribi",
    ],
    subdivisions: [
      "Wouri",
      "Mfoundi",
      "Mifi",
      "Mezam",
      "Benoue",
      "Diamare",
      "Vina",
      "Lom-et-Djerem",
      "Mvila",
      "Meme",
      "Fako",
      "Ocean",
    ],
  };

  // Merge with actual data from database
  if (locations.length > 0) {
    cameroonLocations.towns = [
      ...new Set([
        ...cameroonLocations.towns,
        ...locations[0].towns.filter(Boolean),
      ]),
    ];
    cameroonLocations.subdivisions = [
      ...new Set([
        ...cameroonLocations.subdivisions,
        ...locations[0].subdivisions.filter(Boolean),
      ]),
    ];
  }

  res.json({
    success: true,
    message: "success",
    status: 200,
    cameroonLocations,
  });
});

// SEARCH PHARMACIES AND MEDICATIONS /api/v0/search
export const search = asyncHandler(async (req, res) => {
  const {
    medication,
    town,
    subdivision,
    onlyOpen,
    onlyOnCall,
    latitude,
    longitude,
    radius = 10,
  } = req.query;

  let pharmacyQuery = {};

  // Location filters
  if (town) {
    pharmacyQuery["location.town"] = new RegExp(town, "i");
  }
  if (subdivision) {
    pharmacyQuery["location.subdivision"] = new RegExp(subdivision, "i");
  }

  // Get pharmacies
  let pharmacies = await PharmacyModel.find(pharmacyQuery).select("-password");

  // Filter by medication if specified
  if (medication) {
    const medicationRegex = new RegExp(medication, "i");
    const medicationsWithPharmacies = await MedicationModel.find({
      $or: [
        { medicationName: medicationRegex },
        { genericName: medicationRegex },
        { brand: medicationRegex },
      ],
      availability: true,
    }).populate("pharmacyId", "-password");

    const pharmacyIds = medicationsWithPharmacies.map((med) =>
      med.pharmacyId._id.toString()
    );
    pharmacies = pharmacies.filter((pharmacy) =>
      pharmacyIds.includes(pharmacy._id.toString())
    );

    // Add medications to pharmacy objects
    pharmacies = pharmacies.map((pharmacy) => {
      const pharmacyMeds = medicationsWithPharmacies
        .filter(
          (med) => med.pharmacyId._id.toString() === pharmacy._id.toString()
        )
        .map((med) => ({
          name: med.medicationName,
          price: med.price,
          form: med.form,
          brand: med.brand,
        }));

      return {
        ...pharmacy.toObject(),
        matchedMedications: pharmacyMeds,
      };
    });
  }

  // Add real-time status
  pharmacies = pharmacies.map((pharmacy) => ({
    ...pharmacy,
    isCurrentlyOpen: isPharmacyOpen(pharmacy.operatingHours),
    isCurrentlyOnCall: isPharmacyOnCall(pharmacy.onCallDays),
  }));

  // Filter by open status
  if (onlyOpen === "true") {
    pharmacies = pharmacies.filter((p) => p.isCurrentlyOpen);
  }

  // Filter by on-call status
  if (onlyOnCall === "true") {
    pharmacies = pharmacies.filter((p) => p.isCurrentlyOnCall);
  }

  // Calculate distances if user location provided
  if (latitude && longitude) {
    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    pharmacies = pharmacies.map((pharmacy) => {
      if (
        pharmacy.location.coordinates.latitude &&
        pharmacy.location.coordinates.longitude
      ) {
        const distance = calculateDistance(
          userLat,
          userLon,
          pharmacy.location.coordinates.latitude,
          pharmacy.location.coordinates.longitude
        );
        return { ...pharmacy, distance: Math.round(distance * 10) / 10 };
      }
      return { ...pharmacy, distance: null };
    });

    // Filter by radius
    if (radius) {
      pharmacies = pharmacies.filter(
        (p) => p.distance === null || p.distance <= parseFloat(radius)
      );
    }

    // Sort by distance
    pharmacies.sort((a, b) => {
      if (a.distance === null) return 1;
      if (b.distance === null) return -1;
      return a.distance - b.distance;
    });
  } else {
    // Sort by rating if no location provided
    pharmacies.sort((a, b) => b.rating - a.rating);
  }

  res.json({
    success: true,
    status: 200,
    count: pharmacies.length,
    pharmacies: pharmacies.slice(0, 50), // Limit to 50 results
  });
});

//GET PHARMACY DETAILS   /api/v0/pharmacy/:pharmacyId
export const pharmacyDetails = asyncHandler(async (req, res) => {
  const pharmacy = await PharmacyModel.findById(req.params.pharmacyId).select(
    "-password"
  );
  if (!pharmacy) {
    return res.json({
      message: "Pharmacy not found",
      status: 404,
      success: false,
    });
  }

  // Get pharmacy medications
  const medications = await MedicationModel.find({
    pharmacyId: req.params.pharmacyId,
    availability: true,
  });

  // Add real-time status
  const pharmacyData = {
    ...pharmacy.toObject(),
    isCurrentlyOpen: isPharmacyOpen(pharmacy.operatingHours),
    isCurrentlyOnCall: isPharmacyOnCall(pharmacy.onCallDays),
    medications,
  };

  res.json({ success: true, message: "success", status: 200, pharmacyData });
});
