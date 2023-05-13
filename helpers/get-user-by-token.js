const jwt = require("jsonwebtoken");
const User = require("../models/Users");

// get user by jwt token
const getUserByToken = async (token) => {
  if (!token) {
    return res.status(401).json({ message: "Acesso Negado!" });
  }

  const decoded = jwt.verify(token, process.env.JWT_KEY_SECRET);
  const userId = decoded.id;
  const user = await User.findOne({ _id: userId });

  return user;
};

module.exports = getUserByToken;
