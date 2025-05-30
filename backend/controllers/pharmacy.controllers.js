import asyncHandler from "../middlewares/asyncHandler.js";
import PharmacyModel from "../models/pharmacyModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { JWT_SECRET } from "../config/env.js";

// REGISTER PHARMACY ... /api/v1/pharmacy/register
export const registerPharmacy = asyncHandler(async (req, res) => {
  const {
    pharmacyName,
    pharmacistName,
    email,
    phoneNumber,
    password,
    location,
  } = req.body;

  // Check if pharmacy already exists
  const existingPharmacy = await PharmacyModel.findOne({ email, phoneNumber });
  if (existingPharmacy) {
    return res.json({
      success: false,
      status: 400,
      message: "Pharmacy Already Exist",
    });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new pharmacy
  const pharmacy = new PharmacyModel({
    pharmacyName,
    pharmacistName,
    email,
    phoneNumber,
    password: hashedPassword,
    location,
    operatingHours: {
      monday: { open: "08:00", close: "18:00", isOpen: true },
      tuesday: { open: "08:00", close: "18:00", isOpen: true },
      wednesday: { open: "08:00", close: "18:00", isOpen: true },
      thursday: { open: "08:00", close: "18:00", isOpen: true },
      friday: { open: "08:00", close: "18:00", isOpen: true },
      saturday: { open: "08:00", close: "16:00", isOpen: true },
      sunday: { open: "08:00", close: "12:00", isOpen: false },
    },
  });

  await pharmacy.save();

  // Generate JWT token
  const token = jwt.sign(
    { pharmacyId: pharmacy._id, email: pharmacy.email },
    JWT_SECRET,
    { expiresIn: "24h" }
  );

  res.status(201).json({
    success: true,
    status: 201,
    message: "Pharmacy registered successfully",
    token,
    pharmacy: {
      id: pharmacy._id,
      pharmacyName: pharmacy.pharmacyName,
      email: pharmacy.email,
    },
  });
});

// LOGIN PHARMACY /api/v1/pharmacy/login
export const loginPharmacy = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find pharmacy
  const pharmacy = await PharmacyModel.findOne({ email });
  if (!pharmacy) {
    return res.json({ success: false, status: 400, message: "Invalid Email " });
  }

  // Check password
  const isMatch = await bcrypt.compare(password, pharmacy.password);
  if (!isMatch) {
    return res.json({
      success: false,
      status: 400,
      message: "Invalid Password",
    });
  }

  // Generate JWT token
  const token = jwt.sign(
    { pharmacyId: pharmacy._id, email: pharmacy.email },
    process.env.JWT_SECRET || "your-secret-key",
    { expiresIn: "24h" }
  );

  res.json({
    success: true,
    status: 200,
    message: "Login successful",
    token,
    pharmacy: {
      id: pharmacy._id,
      pharmacyName: pharmacy.pharmacyName,
      email: pharmacy.email,
    },
  });
});

//PHARMACY PROFILE /api/v1/pharmacy/profile
export const pharmacyProfile = asyncHandler(async (req, res) => {
  const pharmacy = await PharmacyModel.findById(req.user.pharmacyId).select(
    "-password"
  );
  if (!pharmacy) {
    return res.json({
      success: false,
      status: 404,
      message: "Pharmacy not found",
    });
  }
  res.status(200).json({ success: true, status: 200, pharmacy });
});

// UPDATE PHARMACY /api/v1/pharmacy/update/profile
export const updatePharmacy = asyncHandler(async (req, res) => {
  const updates = req.body;
  delete updates.password; // Don't allow password updates through this route

  const pharmacy = await PharmacyModel.findByIdAndUpdate(
    req.user.pharmacyId,
    updates,
    { new: true, runValidators: true }
  ).select("-password");

  if (!pharmacy) {
    return res.json({
      message: "Pharmacy not found Login again",
      success: false,
      status: 404,
    });
  }
  res
    .staus(202)
    .json({ message: "Profile updated successfully", pharmacy, status: 202 });
});

//UPDATE OPENING /api/v1/pharmacy/update/opening-hours
export const updateOpeningHours = asyncHandler(async (req, res) => {
  const { operatingHours } = req.body;

  const pharmacy = await PharmacyModel.findByIdAndUpdate(
    req.user.pharmacyId,
    { operatingHours },
    { new: true }
  ).select("-password");

  if (!pharmacy) {
    return res.json({
      message: "Pharmacy not found",
      status: 404,
      success: false,
    });
  }

  res.json({
    message: "Operating hours updated successfully",
    operatingHours: pharmacy.operatingHours,
  });
});

//UPDATE OPENING /api/v1/pharmacy/update/oncall-days
export const updateOncall = asyncHandler(async (req, res) => {
  const { onCallDays } = req.body;

  const pharmacy = await PharmacyModel.findByIdAndUpdate(
    req.user.pharmacyId,
    { isOnCall },
    { new: true }
  ).select("-password");

  if (!pharmacy) {
    return res.json({ message: "Pharmacy not found", status: 404 });
  }

  res.json({
    success: true,
    status: 202,
    message: "On-call days updated successfully",
    onCallDays: pharmacy.onCallDays,
  });
});
