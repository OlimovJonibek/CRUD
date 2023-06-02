const express = require("express");
const router = express.Router();
const flowerController = require("../controllers/flower")

router.get("/", flowerController.getAllFlowers);
router.post("/", flowerController.createFlower);
router.get("/:id", flowerController.getFlowerById);
router.put("/:id", flowerController.updateFlower);
router.delete("/:id", flowerController.deleteFlower);

module.exports = router;

