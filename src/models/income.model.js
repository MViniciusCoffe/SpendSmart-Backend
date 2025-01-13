const pool = require("../database");

class IncomeModel {
  async show() {
    const client = await pool.connect();
    const sql = `SELECT * FROM gastos`;
    const data = await client.query(sql);
    client.release();
    return data.rows;
  }
}

module.exports = new IncomeModel();
