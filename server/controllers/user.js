const UserData = require("../models/UserData");

exports.updateUserData = async (req, res) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      phone,
      streetAddress,
      postalCode,
      city,
      region,
      facebook,
      instagram,
      twitter,
    } = req.body;

    const existingUser = await UserData.findOne({});

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    existingUser.email = email;
    existingUser.password = password;
    existingUser.firstName = firstName;
    existingUser.lastName = lastName;
    existingUser.phone = phone;
    existingUser.streetAddress = streetAddress;
    existingUser.postalCode = postalCode;
    existingUser.city = city;
    existingUser.region = region;
    existingUser.facebook = facebook;
    existingUser.instagram = instagram;
    existingUser.twitter = twitter;

    await existingUser.save();

    res.status(200).json(existingUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


exports.getUserData = async (req, res) => {
  try {
    const userData = await UserData.findOne({});

    if (!userData) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
