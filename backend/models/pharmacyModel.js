import mongoose from 'mongoose'

const pharmacySchema = new mongoose.Schema({
  pharmacyName: { type: String, required: true },
  pharmacistName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  location: {
    address: String,
    town: { type: String, required: true },
    subdivision: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  operatingHours: {
    monday: { open: String, close: String, isOpen: { type: Boolean, default: true } },
    tuesday: { open: String, close: String, isOpen: { type: Boolean, default: true } },
    wednesday: { open: String, close: String, isOpen: { type: Boolean, default: true } },
    thursday: { open: String, close: String, isOpen: { type: Boolean, default: true } },
    friday: { open: String, close: String, isOpen: { type: Boolean, default: true } },
    saturday: { open: String, close: String, isOpen: { type: Boolean, default: true } },
    sunday: { open: String, close: String, isOpen: { type: Boolean, default: false } }
  },
  onCallDays: [String],
  isVerified: { type: Boolean, default: false },
  isCurrentlyOpen: { type: Boolean, default: false },
  isOnCall: { type: Boolean, default: false }
}, {
  timestamps: true
});

const PharmacyModel = mongoose.model('Pharmacy', pharmacySchema);
export default PharmacyModel