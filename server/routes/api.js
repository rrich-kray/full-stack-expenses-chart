const router = require("express").Router();
const Expense = require("../models/Expense");

router.post("/expenses-chart/api/expense", (req, res) => {
  Expense.create(req.body)
    .then((expense) => {
      res.json(expense);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.get("/expenses-chart/api/expense", (req, res) => {
  Expense.findAll({
    attributes: ["name", "value"],
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

module.exports = router;
