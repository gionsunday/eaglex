const Position = require("../models/positios");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  unAuthenticatedError,
} = require("../errors/errorsIndex");


const getallPosition = async (req, res) => {
  try {
    const positions = await Position.find({});

    res.status(StatusCodes.CREATED).json({ positions: positions });
  } catch (error) {
    console.log(error);
  }
};
const getOnePosition = async (req, res) => {
  try {
    const position = await Position.findOne({email:req.body.email});

    res.status(StatusCodes.CREATED).json({ position });
  } catch (error) {
    console.log(error);
  }
};


const createPosition = async (req, res) => {
  try {
    const position = await Position.create({ ...req.body });

    res.status(StatusCodes.CREATED).json({ creator: position.creator});
  } catch (error) {
    console.log(error)
  }

}

module.exports = {
  getOnePosition,
  getallPosition,
  createPosition
}
