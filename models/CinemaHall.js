const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CinemaHallSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    address: {
        type : String,
        required : true
    },
    ratings : {
        type : Number,
        default : 0
    },
    city : {
        type : mongoose.Types.ObjectId,
        required : true
    },
    manager : {
        type : mongoose.Types.ObjectId,
        required : true
    }
},{ timestamps: true })

const CinemaHall = mongoose.model("CinemaHall", CinemaHallSchema);
module.exports = CinemaHall;