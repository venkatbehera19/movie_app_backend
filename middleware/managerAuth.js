const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async function (req, res, next) {
    const token = req.header("x-auth-token");
    if (!token) {
        return res.status(401).json({ errors: [{ message: "Dont have right authorization" }] })
    }
    try {
        const decode = jwt.verify(token, 'Secret24');
        const user = await User.findById({ _id: decode.id });
        if (user.role !== 'Manager') {
            return res.status(401).json({ errors: [{ message: "Dont have right authorization" }] })
        }
        next();
    } catch (error) {
        console.log('Error While validating Manager', error)
        res.status(500).json({ errors: [{ message: "Server Error" }] });
    }
}