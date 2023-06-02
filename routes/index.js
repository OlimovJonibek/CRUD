const express = require('express');
const router = express.Router()


const flowerRoutes = require("./flower")
const orders = require("./orders")
const customers = require("./customers")


router.use("/customers", customers)
router.use("/orders", orders)
router.use("/flowers", flowerRoutes)



module.exports = router;