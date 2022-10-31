const { validationResult } = require("express-validator");
const { removeDuplicates } = require("../helper/movies");
const CinemaHall = require("../models/CinemaHall");
const Movie = require("../models/Movie");
const MovieWithHall = require("../models/MovieWithHall");

const moviesWithHallController = {};

moviesWithHallController.addMovieToHall = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }
    const body = req.body;
    const addedMovieHall = new MovieWithHall(body);
    try {
        const result = await addedMovieHall.save();
        res.json(result);
    } catch (error) {
        console.error('Error While adding movies to hall', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
} 

moviesWithHallController.deleteMovieFormHall = async (req, res) => {
    const id  = req.params.id;
    try {
        const deltedItem = await MovieWithHall.findByIdAndDelete({ _id: id});
        res.json(deltedItem);
    } catch (error) {
        console.error('Error While deleting movies ', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
}

moviesWithHallController.getAllMoviesByCinemaHall = async (req, res) => {
    const id = req.params.id;
    try {
        const allMoviesInformation = await MovieWithHall.find({hall_id: id});
        const all_movies_id = allMoviesInformation.reduce((acc, current) => {
            acc.push(current.movies_id);
            return acc;
        }, [])
        let resultMovies = all_movies_id.map(async(id) => await Movie.findOne(id));
        resultMovies = await Promise.all(resultMovies);
        res.json(resultMovies);
    } catch (error) {
        console.error('Error While getting all movies of a cinema hall', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
}

moviesWithHallController.getAllMoviesByCity = async(req, res) => {
    const id = req.params.id;
    try {
        const allHallInformation = await CinemaHall.find({ city: id}) || [];
        const all_hall_id = allHallInformation.reduce((acc, current) => {
            acc.push(current._id);
            return acc;
        },[]);
        let allMovieIdArr = all_hall_id.map(async(id) => await MovieWithHall.find({ hall_id: id}));
        allMovieIdArr = await Promise.all(allMovieIdArr);
        const all_movies_id = allMovieIdArr.flat().reduce((acc, current) => {
            acc.push(current.movies_id);
            return acc;
        },[]);
        const filterdMoviesId = removeDuplicates(all_movies_id);
        let allMoviesId = filterdMoviesId.map(async (moviesId) => {
            return await Movie.findById({_id : moviesId})
        })
        allMoviesId =await Promise.all(allMoviesId);
        res.json(allMoviesId);
    } catch (error) {
        console.error('Error While getting all movies of a cinema hall', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
}

module.exports = moviesWithHallController;