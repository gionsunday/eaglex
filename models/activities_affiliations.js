const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const ActiveAffiliateSchema = new mongoose.Schema({
    activities: {
        type: String,
        trim: true,
        
    },
    affiliations: {
        type: String,
        trim: true,
        
    },
   
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bio"
    },
 

}, {timestaps:true}) 

module.exports = mongoose.model("ActiveAffiliate", ActiveAffiliateSchema);
