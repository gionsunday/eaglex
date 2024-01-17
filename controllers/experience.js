const Experience = require("../models/experience");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  unAuthenticatedError,
} = require("../errors/errorsIndex");


const getallExperience = async (req, res) => {
  try {
    const experience = await Experience.find({});

    res.status(StatusCodes.CREATED).json({ experience: experience});
  } catch (error) {
    console.log(error);
  }
};
const getOneExperience = async (req, res) => {
  try {
    const experience= await Experience.findOne({email:req.body.email});

    res.status(StatusCodes.CREATED).json({experience});
  } catch (error) {
    console.log(error);
  }
};


const createExperience= async (req, res) => {
  try {
    const experience= await Experience.create({ ...req.body });

    res.status(StatusCodes.CREATED).json({ experince : experience.experience});
  } catch (error) {
    console.log(error)
  }

}

module.exports = {
  getOneExperience,
  getallExperience,
  createExperience
}
