import MedicationModel from "../models/medicationModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

// POST MEDICATION /api/v1/medications/register
export const registerMedication = asyncHandler(async (req, res) => {
  const medicationData = {
    ...req.body,
    pharmacyId: req.user.pharmacyId,
  };

  const medication = new MedicationModel(medicationData);
  await medication.save();

  res
    .status(201)
    .json({
      success: true,
      message: "Medication added successfully",
      medication,
    });
});
// GET PHARMACY MEDICATIONS /api/v1/medications/pharmacy/:pharmacyId/list
export const pharmacyMedications = asyncHandler(async (req, res) => {
  const medications = await MedicationModel.find({
    pharmacyId: req.user.pharmacyId,
  }).sort({ createdAt: -1 });
  if (!medications)
    return res.json({
      success: false,
      status: 404,
      message: "No medications",
      medications: [],
    });
  res.json({ medications, success: true, status: 200 });
});
// UPDATE MEDICATION /api/v1/medications/update/:medicationId
export const updateMedication = asyncHandler(async (req, res) => {
  const medication = await MedicationModel.findOneAndUpdate(
    { _id: req.params.medicationId, pharmacyId: req.user.pharmacyId },
    req.body,
    { new: true, runValidators: true }
  );

  if (!medication) {
    return res.json({
      status: 404,
      success: false,
      message: "Medication not found",
    });
  }

  res.json({
    status: 202,
    success: true,
    message: "Medication updated successfully",
    medication,
  });
});
// DELETE MEDICATION /api/v1/medications/delete/:medicationId
export const deleteMedication = asyncHandler(async (req, res) => {
  const medication = await MedicationModel.findOneAndDelete({
    _id: req.params.medicationId,
    pharmacyId: req.user.pharmacyId,
  });

  if (!medication) {
    return res.json({
      status: 404,
      success: false,
      message: "Medication not found",
    });
  }

  res.json({
    message: "Medication deleted successfully",
    status: 203,
    success: true,
  });
});

// SEARCH MEDICATION /api/v1/medications/search
export const searchMedication = asyncHandler(async (req, res) => {});
