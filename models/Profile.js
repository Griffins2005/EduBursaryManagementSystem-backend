const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  fullName: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  county: { type: String, required: true },
  countyCode: { type: Number, required: true },
  postalCode: { type: String, required: true },
  institutionName: { type: String, required: true },
  course: { type: String, required: true },
  yearOfStudy: { type: String, required: true },
  studentId: { type: String, required: true },
  householdIncome: { type: Number, required: true },
  numberOfDependents: { type: Number, required: true },
  employmentStatus: { type: String, required: true },
  financialAid: { type: String, required: true },
  personalStatement: { type: String, required: true },
});

module.exports = mongoose.model('Profile', ProfileSchema);
