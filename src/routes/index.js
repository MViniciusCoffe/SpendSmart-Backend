const { Router } = require("express");
const auth = require("../middlewares/auth.middleware");
const router = new Router();

const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");

router.post("/auth", authController.login);

// Rotas do usuário
router.post("/user", userController.store);
router.delete("/user/:email", userController.remove);
router.put("/user/:email", userController.update);

module.exports = router;
