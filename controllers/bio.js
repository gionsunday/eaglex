const Bio = require("../models/bio");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  unAuthenticatedError,
} = require("../errors/errorsIndex");


const getallbio = async (req, res) => {
  try {
    const bios = await Bio.find({});

    res.status(StatusCodes.CREATED).json({ bios: bios });
  } catch (error) {
    console.log(error);
  }
};
const getOnebio = async (req, res) => {
  try {
    const bio = await Bio.findOne({email:req.body.email});

    res.status(StatusCodes.CREATED).json({ bio });
  } catch (error) {
    console.log(error);
  }
};


const createBio = async (req, res) => {
  try {
    const bio = await Bio.create({ ...req.body });

    res.status(StatusCodes.CREATED).json({ member: { name: bio.firstName + " " + bio.middleName + " " + bio.lastName }, userId:bio._id, email:bio.email});
  } catch (error) {
    console.log(error)
  }

}

module.exports = {
  getOnebio,
  getallbio,
  createBio
}
