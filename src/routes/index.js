const { Router } = require("express");
const auth = require("../middlewares/auth.middleware");
const router = new Router();

const userController = require("../controllers/user.controller");
const categoryController = require("../controllers/category.controller");
const incomeController = require("../controllers/income.controller")
const authController = require("../controllers/auth.controller");

router.post("/auth", authController.login);

// Rotas do usuário
router.post("/user", userController.store);
router.get("/user", auth, userController.show);
router.delete("/user/:email", auth, userController.remove);
router.put("/user/:email", auth, userController.update);

// Rotas das categorias
router.post("/category", auth, categoryController.store);
router.get("/category", auth, categoryController.show);
router.delete("/category/:id", auth, categoryController.remove);
router.put("/category/:id", auth, categoryController.update);

// Rotas de Rendas
router.get("/income", incomeController.show);

module.exports = router;
