const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UnboardManagerSchema = new Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required: true
    },
    phone : {
        type : Number,
        required: true
    },
    address : {
        type : String,
        required: true
    },
    hallDetails: {
        name : {
            type : String,
            required: true
        },
        city : {
            type : mongoose.Types.ObjectId,
            required : true
        },
        noOfSeat : {
            type : Number,
            required : true
        },
        address : {
            type : String,
            required: true
        },
    }
}, { timestamps: true});

const UnboardManager = mongoose.model('UnboardManager',UnboardManagerSchema );
module.exports = UnboardManager;