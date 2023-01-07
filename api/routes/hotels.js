import expess from "express";
import Hotel from "../models/hotels.js";

const router = expess.Router();

//Create
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});
//update
router.put("/:id", async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});
//delete
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(
      req.params.id,
    );
    res.status(200).json("Hotel has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(
      req.params.id,
    );
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GETALL
router.get("/", async (req, res) => {
    try {
      const hotels = await Hotel.find(
        req.params.id,
      );
      res.status(200).json(hotels);
    } catch (error) {
      res.status(500).json(error);
    }
  });

export default router;
