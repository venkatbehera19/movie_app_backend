const { validationResult } = require("express-validator");
const CinemaHall = require("../models/CinemaHall");
const UnboardManager = require("../models/UnboardManger");
const User = require("../models/User");
const bcrypt = require('bcryptjs');

const onboardController = {};

onboardController.onBoardManager = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }
    const body = req.body;
    const onboardUser = new UnboardManager(body);
    try {
        const savedUser = await onboardUser.save();
        res.json(savedUser);
    } catch (error) {
        console.error('Error While onBoarding Hall Manager', error)
        res.status(500).json({ errors: [{ message: "Server Error"}]});
    }
}

onboardController.acceptManagerByAdmin = async (req, res) => {
    const id = req.params.id;
    const salt = await bcrypt.genSalt(10);
    try {
        const onboardManger = await UnboardManager.findByIdAndDelete(id);
        const { name, email, password, phone, address, hallDetails} = onboardManger;
        if(onboardManger?.email){
            const newUser = new User({
                name : name,
                email: email.toLowerCase(),
                password: password,
                phone: phone,
                address: address,
                city : hallDetails.city,
                role : 'Manager'
            })
            const salt = await bcrypt.genSalt(10);
            if(salt){
                newUser.password = await bcrypt.hash(password, salt);
                const createdUser = await newUser.save();
                if(createdUser?.email){
                    const addHall = new CinemaHall({
                        address: hallDetails.address,
                        name: hallDetails.name,
                        city: hallDetails.city,
                        manager: createdUser._id
                    })
                   const newHall = await addHall.save();
                   res.json(onboardManger);
                }
            }
        }else{
            res.status(400).json({ errors: [{ message: "Something Went Wrong"}]});
        }
    } catch (error) {
        res.status(500).json({ errors: [{ message: "Server Error"}]});
    }
}

onboardController.getAllManager = async(req, res) => {
    try {
        const onBoardManagers = await UnboardManager.find();
        res.json(onBoardManagers);
    } catch (error) {
        console.error('Error While getting onBoard Hall Manager', error)
        res.status(500).json({ errors: [{ message: "Server Error"}]});
    }
}

module.exports = onboardController;