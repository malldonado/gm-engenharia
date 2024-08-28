const ContactData = require('../models/ContactData');

exports.getContactData = async (req, res) => {
  try {
    const data = await ContactData.find().sort({ createdAt: -1 }); // Ordena em ordem crescente de createdAt
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching data');
  }
}

exports.postContactData = async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const formData = new ContactData({ name, email, phone, message });
    await formData.save();
    console.log('Form data saved:', formData);

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred while submitting the form');
  }
}

exports.deleteContactData = async (req, res) => {
  try {
    const data = await ContactData.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json({ message: 'Data deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while deleting data');
  }
}