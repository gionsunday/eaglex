const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const InsightPubSchema = new mongoose.Schema({
    insight: {
        type: String,
        trim: true,
        require: true,
    },
    publications: {
        type: String,
        trim: true,
        
    },
   
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bio"
    },
 

}, {timestaps:true}) 

module.exports = mongoose.model("InsightPub", InsightPubSchema);
