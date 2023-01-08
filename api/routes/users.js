import expess from "express";
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/users.js";
import { verifyAdmin, verifyToken, verifyUser } from "../util/verifyToken.js";

const router = expess.Router();

// router.get("/checkAuthentication", verifyToken, (req, res, next) => {
//     res.send("Hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser , (req, res, next) => {
//     res.send("Hello user, you are logged in and you can delete you account")
// })

// router.get("/checkadmin/:id", verifyAdmin , (req, res, next) => {
//   res.send("Hello Admin, you are logged in and you can delete all account")
// })

//update
router.put("/:id",verifyUser, updateUser);
//delete
router.delete("/:id",verifyUser, deleteUser);
//GET
router.get("/:id",verifyUser, getUser);
//GETALL
router.get("/",verifyAdmin, getAllUser);

export default router;
