import mongoose from 'mongoose'

const medicationSchema = new mongoose.Schema({
  pharmacyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pharmacy', required: true },
  medicationName: { type: String, required: true },
  genericName: String,
  brand: String,
  dosage: String,
  form: String, // tablet, capsule, syrup, injection, etc.
  price: Number,
  availability: { type: Boolean, default: true },
  quantity: Number,
  description: String,
  category: String,
  requiresPrescription: { type: Boolean, default: false }
}, {
  timestamps: true
});
const MedicationModel = mongoose.model('Medication', medicationSchema);

export default MedicationModel