const seedExpenses = require("./expense-seeds");

const sequelize = require("../db/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedExpenses();
  console.log("\n----- EXPENSES SYNCED -----\n");

  process.exit(0);
};

seedAll();
