const { validationResult } = require("express-validator");
const seat = require("../helper/seat");
const MovieTimings = require("../models/MovieTimings");
const { isTimeAvailable } = require("../helper/movies");

const moviesTimingsController = {};

moviesTimingsController.create = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const body = req.body;
    const { hall_id, movie_id, time } = req.body;
    const convertedUtcDate = new Date(time);
    body.seats = seat();
    const timing = new MovieTimings(body);
    try {
        const timings = await MovieTimings.find({ hall_id: hall_id, movie_id: movie_id });
        const allMovieTimmings = timings.reduce((acc, current) => {
            // acc.push( date.format(current.time, 'ddd, MMM DD YYYY HH:mm:ss A [GMT]Z', true) );
            acc.push(new Date(current.time))
            return acc;
        }, [])
        const isChecked = isTimeAvailable(allMovieTimmings, convertedUtcDate);
        if (!isChecked) {
            const createdTimming = await timing.save();
            res.json(createdTimming);
        }else{
            res.status(400).json({ message : "Choose Different Time Slot"})
        }
    } catch (error) {
        console.error('Error While creating movies timing', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
}

moviesTimingsController.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedItems = await MovieTimings.findByIdAndDelete(id);
        res.json(deletedItems);
    } catch (error) {
        console.error('Error While deleting a movies timing', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
}

module.exports = moviesTimingsController;