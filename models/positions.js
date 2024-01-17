const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Double } = require("mongodb");
require("dotenv").config();

const PositionSchema = new mongoose.Schema({
    about_yourself: {
        type: String,
        trim: true,
        require: true,
    },
    position: {
        type: String,
        trim: true,
        require: true,
    },
    expertise: {
        type: String,
        trim: true,
        require: true,
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bio"
    },
 

}, {timestaps:true}) 

module.exports = mongoose.model("Position", PositionSchema);
