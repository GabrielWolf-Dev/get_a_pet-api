const router = require("express").Router();
const PetController = require("../controllers/PetController");

// middlewares
const verifyToken = require("../helpers/verify-token");
const { imageUpload } = require("../helpers/image-upload");

router.get("/", PetController.getAll);
router.get("/mypets", verifyToken, PetController.getAllUserPets);
router.get("/myadoptions", verifyToken, PetController.getAllUserAdoptions);
router.get("/:id", verifyToken, PetController.getPetById);
router.delete("/:id", verifyToken, PetController.removePetById);
router.patch(
  "/:id",
  verifyToken,
  imageUpload.array("images"),
  PetController.updatePet
);
router.patch("/schedule/:id", verifyToken, PetController.schedule);
router.patch("/conclude/:id", verifyToken, PetController.concludeAdoption);
router.post(
  "/create",
  verifyToken,
  imageUpload.array("images"),
  PetController.create
);

module.exports = router;
