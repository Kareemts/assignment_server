const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

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

const filter = async ({ data }) => {
  console.log(data);
  const filteredUsers = await prisma.orders.findMany({
    where: {
      OR: [{ product_name: { contains: data } }],
    },
    include: {
      Users: true,
    },
  });
  return filteredUsers;
};

module.exports = { users, orders, filter };
