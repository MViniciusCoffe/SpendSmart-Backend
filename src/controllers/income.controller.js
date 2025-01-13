const IncomeModel = require("../models/income.model.js");

async function show(req, res) {
  res.json(await IncomeModel.show());
}

module.exports = { show };
