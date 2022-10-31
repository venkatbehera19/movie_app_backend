const { validationResult } = require("express-validator");
const CinemaHall = require("../models/CinemaHall");
const MovieTimings = require("../models/MovieTimings");
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

cinemaHallController.getAllHallByCity = async(req, res) => {
    const id = req.params.id;
    try {
       const result = await CinemaHall.find({ city: id}) || [];
       res.json(result);
    } catch (error) {
        console.error('Error While getting all Cinema Hall By City Id', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
}

const checkIsPresent = (arr, objectId) => {
    return arr.some((arrDetails) => {
        return arrDetails?.hall._id === objectId;
    })
}

cinemaHallController.getAllHallAndTimmingsByMoviesId = async (req, res) => {
    const movieId = req.params.moviesId;
    const cityId = req.params.cityId;
    try {
        // get all the hall in the city by movies Id
        const allMoviesWithHall = await MovieTimings.find({ movie_id: movieId});
        // all hallId by moviesId
        let transformedAllMoviesWithHall = allMoviesWithHall.map(async(allMovies) => {
            const hallDetails = await CinemaHall.find({_id: allMovies.hall_id});
            return hallDetails;
        })
        transformedAllMoviesWithHall = await (await Promise.all(transformedAllMoviesWithHall)).flat();
        const arr = [];
        allMoviesWithHall.forEach((allMovie, index) => {
            const hallDetails = transformedAllMoviesWithHall.find((allMov) => {
                return allMov._id.equals(allMovie.hall_id)
            });
            arr.push({
                id: index+1,
                hall: hallDetails,
                time: allMovie.time,
                createdAt: allMovie.createdAt,
                updatedAt: allMovie.updatedAt,
                timeIndex: allMovie._id
            })
        });
        const result = [];
        arr.forEach((allData) => {
            if(!checkIsPresent(result, allData.hall._id)){
                result.push({
                    id: allData.id,
                    hall: allData.hall,
                    time: [
                        {
                            _id : allData.timeIndex,
                            time_slot : allData.time
                        }
                    ]
                });
            }else{
                const findOutData = result.findIndex((resultData) => {
                    return resultData.hall._id === allData.hall._id;
                })
                console.log('Works',findOutData);
                result[findOutData] = {
                    ...result[findOutData],
                    time: [...result[findOutData].time, { _id: allData.timeIndex,time_slot : allData.time }]
                }
            }
        })
        res.json(result);
    } catch (error) {
        console.error('Error While getting all hall  By movie Id', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
}

cinemaHallController.getAllSeatByTimeId = async (req, res) => {
    const id = req.params.id;
    try {
       const result = await MovieTimings.findById(id);
       res.json(result);
    } catch (error) {
        console.error('Error While getting all seat by timmings Id', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
}

module.exports = cinemaHallController;