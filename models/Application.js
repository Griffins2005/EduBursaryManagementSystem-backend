const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  school: { type: String, required: true },
  amount: { type: Number, required: true },
  familyType: { type: String, required: true },
  fatherOccupation: { type: String },
  fatherEarnings: { type: Number },
  motherOccupation: { type: String },
  motherEarnings: { type: Number },
  guardianOccupation: { type: String },
  guardianEarnings: { type: Number },
  guardianRelationship: { type: String }
});

module.exports = mongoose.model('Application', applicationSchema);
