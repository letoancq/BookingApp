import expess from "express";
import Hotel from "../models/hotels.js"

const router = expess.Router();

//Create
router.post("/", async(req,res) => {


    const newHotel = new Hotel(req.body)

    try {
        const saveHotel= await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (error) {
        res.status(500).json(error)
    }
})
//update

//delete

//GET

//GETALL

export default router;
