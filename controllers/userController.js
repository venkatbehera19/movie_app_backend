const User = require("../models/User");
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userController = {};

userController.createUser = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }
    const data = req.body;
    const {password} = data;
    const user = new User(data);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    try {
        await user.save();
        res.json({messages : 'user created successfully'});
    } catch (error) {
        console.log('Error While creating a user', error)
        res.status(500).json({ errors: [{ message: "Server Error"}]});
    }
}

userController.loginUser = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }
    const { email, password} = req.body;
    try {
      const user =  await User.findOne({ email});
      const match = await bcrypt.compare(password, user.password);
      if(!match){
        return res.status(401).json({ errors: [{ message: "Invalid UserName and Password"}]})
      }
      const payload = {
        id: user._id
      }
      jwt.sign(payload, 'Secret24', { expiresIn: 3600 * 24}, (err, token) => {
        if(err) throw err;
        res.json({ token});
      })
    } catch (error) {
        console.log('Error While creating a user', error)
        res.status(500).json({ errors: [{ message: "Server Error"}]});
    }
}

module.exports = userController;