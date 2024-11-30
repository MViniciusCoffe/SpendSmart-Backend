const pool = require("../database");

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.stack);
  } else {
    console.log(
      "Conexão bem-sucedida! Hora atual no banco de dados:",
      res.rows[0].now,
    );
  }
  pool.end();
});
