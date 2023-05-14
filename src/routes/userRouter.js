const {
  getUsers,
  createUser,
  getOrders,
} = require("../controllers/userController");

const router = require("express").Router();

router.get("/users", getUsers);

router.get("/orders", getOrders);

router.post("/user", createUser);

module.exports = router;
