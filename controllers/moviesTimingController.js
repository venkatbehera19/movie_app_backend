const MovieTimings = require("../models/MovieTimings");

const moviesTimingsController = {};

moviesTimingsController.create = async(req, res) => {
    const body = req.body;
    const timing = new MovieTimings(body);
    try {
       const createdTimming = await timing.save();
       res.json(createdTimming);
    } catch (error) {
        console.error('Error While creating movies timing', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
}

module.exports = moviesTimingsController;