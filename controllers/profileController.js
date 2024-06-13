const Profile = require('../models/Profile');

exports.createProfile = async (req, res) => {
  const {
    fullName, dob, gender, phone, email, address, city, county, countyCode,
    postalCode, institutionName, course, yearOfStudy, studentId,
    householdIncome, numberOfDependents, employmentStatus,
    financialAid, personalStatement
  } = req.body;

  try {
    // Check if email already exists for another user
    const existingProfile = await Profile.findOne({ email, user: { $ne: req.user._id } });
    if (existingProfile) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const profile = new Profile({
      user: req.user._id, // Associate profile with user
      fullName, dob, gender, phone, email, address, city, county, countyCode,
      postalCode, institutionName, course, yearOfStudy, studentId,
      householdIncome, numberOfDependents, employmentStatus,
      financialAid, personalStatement
    });

    await profile.save();
    res.status(201).json({ message: 'Profile created successfully', profile });
  } catch (error) {
    console.error('Profile creation error:', error);
    res.status(500).json({ error: 'Error creating profile' });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id }); // Get profile associated with user
    if (profile) {
      res.json(profile);
    } else {
      res.status(404).json({ error: 'Profile not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
