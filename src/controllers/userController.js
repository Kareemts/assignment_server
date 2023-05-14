const { users, orders, filter } = require("../services/userServices");

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

const filterOrders = async (req, res, next) => {
  try {
    const orderData = await filter(req.body);
    return res.status(200).json({
      status: true,
      orderData,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  getUsers,
  getOrders,
  filterOrders,
};
