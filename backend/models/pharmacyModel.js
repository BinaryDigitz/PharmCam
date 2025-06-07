import mongoose from 'mongoose'

const pharmacySchema = new mongoose.Schema({
  pharmacyName: { type: String, required: true },
  pharmacistName: { type: String, required: true },
  emailAddress: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  town:{
    type:String,
    required: true
  },
  region:{
    type:String,
    required: true
  },
  location: {
    latitude: {type:Number, default: 0},
   longitude: { type: Number, default: 0 }

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