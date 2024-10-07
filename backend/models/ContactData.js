const mongoose = require('mongoose');
const contactDataSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String
  },
  message: {
    type: String,
  }
}, { timestamps: true });

const ContactData = mongoose.model('ContactData', contactDataSchema);

module.exports = ContactData;
