const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  dob: Date,
  experience: String
});

const AAndDApplicants = mongoose.model('AAndDApplicants', applicantSchema);

module.exports = AAndDApplicants;
