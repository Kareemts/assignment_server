const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const create = async () => {
  const order = await prisma.orders.create({
    data: {
      product_name: "Samsung Keyboard",
      status: "DELIVERED",
      created_date: new Date(),
      Users: {
        connect: { id: 14 }, // connect to a user with ID 1
      },
    },
  });
};

const users = async (data) => {
  const page = parseInt(data.page) || 1;
  const limit = parseInt(data.limit) || 5;
  const skip = (page - 1) * limit;

  const [users, Total_users] = await Promise.all([
    prisma.users.findMany({
      include: {
        orders: true,
      },
      skip,
      take: limit,
    }),
    prisma.users.count(),
  ]);

  return { Total_users, users };
};

const orders = async () => {
  const orders = await prisma.orders.findMany({
    include: {
      Users: true,
    },
  });

  return orders;
};

module.exports = { create, users, orders };
