const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/getapet");
  console.log("Conectou ao Mongoose!");
}

main().catch((err) => console.error(err));

module.exports = mongoose;
