const { create, users, orders } = require("../services/userServices");

const getUsers = async (req, res, next) => {
  try {
    const userData = await users(req.query);
    return res.status(200).json({
      status: true,
      userData,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const getOrders = async (req, res, next) => {
  try {
    const orderData = await orders();
    return res.status(200).json({
      status: true,
      orderData,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    if (!req.body) {
      return res.status(500).json({
        status: false,
        message: "Please provide user details",
      });
    } else {
      const userInfo = await create(req.body);
      return res.status(200).json({
        status: true,
        userInfo,
      });
    }
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  getUsers,
  createUser,
  getOrders,
};
