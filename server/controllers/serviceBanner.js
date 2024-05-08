const ServicesBanner = require("../models/ServiceBanner");

exports.serviceBanner = async (req, res) => {
  try {
    const { nameServiceBanner, descriptionServiceBanner, imageServiceBanner } = req.body;

    const servicesBanner = await new ServicesBanner({
      nameServiceBanner,
      descriptionServiceBanner,
      imageServiceBanner,
    }).save();
    res.json({
      success: true,
      servicesBanner: servicesBanner,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.serviceImage = async (req, res) => {
  try {
    const imagens = await ServicesBanner.find({}, 'imageServiceBanner'); // Supondo que 'Imagem' seja o seu modelo do Mongoose
    res.json(imagens);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

