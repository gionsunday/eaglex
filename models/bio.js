const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Double } = require("mongodb");
require("dotenv").config();

const BioSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        require: true,
    },
    middleName: {
        type: String,
        trim: true,
       
    },
       languages: {
        type: String,
        trim: true,
       
    },
    lastName: {
        type: String,
        trim: true,
        require: true,
    },
    email: {
        type: String,
        trim: true,
        require: true,
    },
    email2: {
        type: String,
        trim: true,
        require: true,
    },
    phone: {
        type: String,
        trim: true,
        require: true,
    },

    address: {
        type: String,
        trim: true,
        require: true,
    },
    address2: {
        type: String,
        trim: true,

    },
    linkedIn: {
        type: String,
        trim: true,
        require: true,
    },
    city: {
        type: String,
        trim: true,

    },
    state_of_origin: {
        type: String,
        trim: true,

    },
    zip: {
        type: String,
        trim: true,

    },
 

}, {timestaps:true}) 

module.exports = mongoose.model("Bio", BioSchema);
