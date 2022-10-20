    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        name : {
            type : String,
            required: true
        },
        email: {
            type : String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        age: {
            type: Number,
        },
        address: {
            type: String,
        },
        gender: {
            type: String,
            enum: ['male', 'female', 'others'],
        },
        role: {
            type : String,
            required: true,
            enum: ['Manager', 'Admin', 'Customer'],
            default: 'Customer'
        },
        city : {
            type: mongoose.Types.ObjectId,
            required: true,
        }
    },{ timestamps: true })

    const User = mongoose.model("User", UserSchema);

    module.exports = User;