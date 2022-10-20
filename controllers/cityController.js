const { validationResult } = require('express-validator');
const City = require("../models/City");

const cityController = {};

cityController.createCity = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }
    const body = req.body;
    const city = new City(body);
    try {
       const createdUser = await city.save();
       res.json(createdUser);
    } catch (error) {
        console.error('Error While Creating City', error)
        res.status(500).json({ errors: [{ message: "Server Error"}]});
    }
}

cityController.getACity = async (req, res, next) => {
    const id = req.params.id;
    try {
        const city = await City.findById({ _id: id});
        if(!city){
            return res.status(404).json({ errors: [{ message: "No City Found"}]})
        }
        res.json(city);
    } catch (error) {
        console.log('Error While getting a City', error)
        res.status(500).json({ errors: [{ message: "Server Error"}]});
    }
}

cityController.getAllCity = async (req, res) => {
    try {
        const cities = await City.find() || [];
        res.json(cities);
    } catch (error) {
        console.log('Error While getting Cities', error)
        res.status(500).json({ errors: [{ message: "Server Error"}]});
    }
}

cityController.deleteCity = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedCity = await City.findByIdAndDelete({ _id: id});
        res.json(deletedCity);
    } catch (error) {
        console.log('Error While delete a City', error)
        res.status(500).json({ errors: [{ message: "Server Error"}]});
    }
}
cityController.updateCity = async (req, res) => {
    const id = req.params.id;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }
    try {
        const existsCity = await City.exists({ _id: id});
        console.log('existsCity', existsCity)
        if(!existsCity){
            return res.status(404).json({ errors: [{ message: "No City Founds to Update"}]})
        }
        const updatedCity = await City.findByIdAndUpdate({ _id: id}, req.body, {
            new : true
        });
        res.json(updatedCity);
    } catch (error) {
        console.log('Error While delete a City', error)
        res.status(500).json({ errors: [{ message: "Server Error"}]});
    }
}

module.exports = cityController;