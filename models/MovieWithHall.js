const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieWithHallSchema = new Schema({
    movies_id : {
        type : mongoose.Types.ObjectId,
        required : true
    },
    hall_id: {
        type : mongoose.Types.ObjectId,
        required : true
    }
}, { timestamps: true});

const MovieWithHall = mongoose.model('MovieWithHall', MovieWithHallSchema);
module.exports = MovieWithHall;