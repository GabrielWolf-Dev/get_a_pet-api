const jwt = require("jsonwebtoken");

const createUserToken = async (user, req, res) => {
  // create token
  const token = jwt.sign(
    {
      name: user.name,
      id: user._id,
    },
    process.env.JWT_KEY_SECRET
  );

  // return token
  res.status(200).json({
    message: "Você está autenticado",
    userId: user._id,
    token,
  });
};

module.exports = createUserToken;
