const {
  getUsers,
  getOrders,
  filterOrders,
} = require("../controllers/userController");

const router = require("express").Router();

router.get("/users", getUsers);

router.get("/orders", getOrders);

router.post("/filter", filterOrders);

module.exports = router;
