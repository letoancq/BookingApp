import expess from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "../controllers/rooms.js";
import { verifyAdmin } from "../util/verifyToken.js";

const router = expess.Router();

//Create
router.post("/:hotelid",verifyAdmin, createRoom);
//update
router.put("/:id",verifyAdmin, updateRoom);
//delete
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom);
//GET
router.get("/:id", getRoom);
//GETALL
router.get("/", getAllRoom);

export default router;
