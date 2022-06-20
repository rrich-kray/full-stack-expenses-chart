const Expense = require("../models/Expense");

const expenseData = [
  {
    name: "01/01/2022",
    value: 21.22,
  },
  {
    name: "01/02/2022",
    value: 12.22,
  },
  {
    name: "01/03/2022",
    value: 11.99,
  },
  {
    name: "01/04/2022",
    value: 12.99,
  },
  {
    name: "01/05/2022",
    value: 5.99,
  },
  {
    name: "01/06/2022",
    value: 8.99,
  },
];

const seedExpenses = () => Expense.bulkCreate(expenseData);

module.exports = seedExpenses;
