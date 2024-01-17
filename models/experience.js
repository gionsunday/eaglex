const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const ExperienceSchema = new mongoose.Schema({
    experience: {
        type: String,
        trim: true,
        require: true,
    },
   
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bio"
    },
 

}, {timestaps:true}) 

module.exports = mongoose.model("Experience", ExperienceSchema);
