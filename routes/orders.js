const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orders");

router.get("/", ordersController.getAllOredrs)
router.post("/", ordersController.createOrder)
router.delete("/:id", ordersController.deleteOrder)
router.put("/:id", ordersController.updateOrder)
router.get("/:id", ordersController.getOrderById)



module.exports = router;

