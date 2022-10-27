const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieTimingsSchema = new Schema({
    hall_id: {
        type : mongoose.Types.ObjectId,
        required : true
    },
    movie_id: {
        type : mongoose.Types.ObjectId,
        required : true
    },
    time : {
        type : Date,
        required : true
    },
    seats : {
        type : Object,
        required : true
    }
},{timestamps: true});

const MovieTimings = mongoose.model('MovieTimings', MovieTimingsSchema);
module.exports = MovieTimings;