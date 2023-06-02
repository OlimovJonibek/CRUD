const express = require("express");
const router = express.Router();
const customersController = require("../controllers/customers");

router.get("/", customersController.getAllCustomers);
router.get("/:id", customersController.getCustomerById);
router.post("/", customersController.createCustomers);

router.put("/:id", customersController.updateCustomers);
router.delete("/:id", customersController.deleteCustomers);

module.exports = router;

