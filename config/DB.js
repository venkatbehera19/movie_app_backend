const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.DB_URL;

const configureDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Connected to mongoDB')
    } catch (error) {
        console.log('Unable to connect with DB')
    }
}

module.exports = configureDB;