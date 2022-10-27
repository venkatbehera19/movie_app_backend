const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    ratings : {
        type : Number,
        default : 0
    },
    language : {
        type : String,
        required: true,
        enum : ['hindi', 'english']
    },
    description: {
        type : String,
        required: true,
    },
    releaseDate: {
        type : Date,
        required: true
    },
    trailerUrl: {
        type: String,
        required: true
    },
    posterUrl: {
        type: String,
        required: true
    },
    duration: {
        type : Number,
        default: 2
    },
    genres : {
        type: [String],
        required: true
    }
}, { timestamps : true});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;