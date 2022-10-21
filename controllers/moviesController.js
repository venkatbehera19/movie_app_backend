const { validationResult } = require("express-validator");
const Movie = require("../models/Movie");

const moviesController = {};

moviesController.createMovies = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const body = req.body;
    const movie = new Movie(body);
    try {
        const savedMovies = await movie.save();
        res.json(savedMovies);
    } catch (error) {
        console.error('Error While creating movies', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
}

moviesController.updateMovies = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const body = req.body;
    const id = req.params.id;
    try {
        const updatedMovies = await Movie.findByIdAndUpdate({_id: id}, body, { new: true});
        if(!updatedMovies){
            return res.status(404).json({ errors: [{ message: "No Movie to update" }] });
        }
        res.json(updatedMovies);
    } catch (error) {
        console.error('Error While updating movies', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
}

moviesController.getMovie = async (req, res) => {
    const id = req.params.id;
    try {
        const movie = await Movie.findById({ _id: id});
        if(!movie){
           return res.status(404).json({ errors: [{ message: "No Movie Found" }] });
        }
        res.json(movie);
    } catch (error) {
        console.error('Error While getting movies', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
}

moviesController.deleteMovies = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedMovies = await Movie.findByIdAndDelete({ _id: id});
        res.json(deletedMovies);
    } catch (error) {
        console.error('Error While deleting Movies', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
}

module.exports = moviesController;