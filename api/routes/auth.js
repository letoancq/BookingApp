import expess from "express";
import { login, register } from "../controllers/auth.js";

const router = expess.Router();

router.get("/", (req, res) => {
  res.send("Helle, this is auth endpoint!");
});

router.post("/register", register);
router.post("/login", login);

export default router;
