const { validationResult } = require("express-validator");
const CinemaHall = require("../models/CinemaHall");
const User = require("../models/User");

const cinemaHallController = {};

cinemaHallController.create = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const body = req.body;
    const hall = new CinemaHall(body);
    try {
        const createdCinemaHall = await hall.save();
        res.json(createdCinemaHall);
    } catch (error) {
        console.error('Error While Creating Cinema Hall', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
}

cinemaHallController.getHall = async (req, res) => {
    const id = req.params.id;
    try {
        const hall = await CinemaHall.findById(id);
        res.json(hall);
    } catch (error) {
        console.error('Error While get a Cinema Hall', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
}

cinemaHallController.deleteHall = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedHall = await CinemaHall.findByIdAndDelete({ _id: id });
        res.json(deletedHall);
    } catch (error) {
        console.error('Error While deleting a Cinema Hall', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
}

cinemaHallController.updateHall = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const id = req.params.id;
    const body = req.body;
    try {
        const existsHall = await CinemaHall.exists({ _id: id});
        if(!existsHall){
            return res.status(404).json({ errors: [{ message: "No Hall Founds to Update"}]})
        }
        const updatedHall = await CinemaHall.findByIdAndUpdate({ _id: id }, body, { new: true })
        res.json(updatedHall);
    } catch (error) {
        console.error('Error While updating a Cinema Hall', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
}

cinemaHallController.getAllHallByManager = async(req, res) => {
    const id = req.params.id;
    const isManager = await User.exists({ _id: id});
    if(!isManager){
        return res.status(404).json({ errors: [{ message: "You are not a Manager"}]})
    }
    try {
        const allHall = await CinemaHall.find({ manager: id});
        res.json(allHall)
    } catch (error) {
        console.error('Error While getting all Cinema Hall', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
}

module.exports = cinemaHallController;