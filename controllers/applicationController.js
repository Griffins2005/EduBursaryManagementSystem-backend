const Application = require('../models/Application');

exports.createApplication = async (req, res) => {
  try {
    // Check if user is authenticated
    if (!req.user) {
      console.error('User authentication failed');
      return res.status(401).json({ error: 'User authentication failed' });
    }

    // Ensure required fields are present in the request body
    const { name, school, amount, familyType, fatherOccupation, fatherEarnings, motherOccupation, motherEarnings, guardianOccupation, guardianEarnings, guardianRelationship } = req.body;
    if (!name || !school || !amount || !familyType) {
      console.error('Missing required fields');
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create new application associated with the authenticated user
    console.log('Creating application:', req.body);
    const application = new Application({
      userId: req.user._id,
      name,
      school,
      amount,
      familyType,
      fatherOccupation,
      fatherEarnings,
      motherOccupation,
      motherEarnings,
      guardianOccupation,
      guardianEarnings,
      guardianRelationship
    });

    // Save the application to the database
    console.log('Saving application to the database...');
    await application.save();
    console.log('Application submitted successfully:', application);

    // Send response indicating successful submission
    res.status(201).json({ message: 'Application submitted successfully', application });
  } catch (error) {
    // Log any errors that occur during the process
    console.error('Error submitting application:', error);
    // Send an error response
    res.status(500).json({ error: 'Error submitting application' });
  }
};

exports.getUserApplications = async (req, res) => {
  try {
    const applications = await Application.find({ userId: req.user._id }); // Use authenticated user's ID
    res.json(applications);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ error: 'Error fetching applications' });
  }
};

exports.getAllApplications = async (req, res) => {
  try {
    console.log('Fetching all applications...');
    const applications = await Application.find();
    console.log('Fetched all applications:', applications);
    res.json(applications);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ error: 'Error fetching applications' });
  }
};
