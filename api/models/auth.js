import expess from "express";

const router = expess.Router();

router.get("/", (req, res) => {
  res.send("Helle, this is auth endpoint!");
});

router.get("/register", (req, res) => {
    res.send("Helle, this is register endpoint!");
  });

export default router;
