import expess from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotels.js";

const router = expess.Router();

//Create
router.post("/", createHotel);
//update
router.put("/:id", updateHotel);
//delete
router.delete("/:id", deleteHotel);
//GET
router.get("/:id", getHotel);
//GETALL
router.get("/", getAllHotel);

export default router;
