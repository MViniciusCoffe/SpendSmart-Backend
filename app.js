const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./src/routes/");
const port = 5000;

app.use(express.json());
app.use(cors("*"));
app.use(routes)
app.listen(port, () => {
  console.log("Servidor rodando na porta " + port);
});
