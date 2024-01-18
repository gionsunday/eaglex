const InsightPub = require("../models/insights_publications");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  unAuthenticatedError,
} = require("../errors/errorsIndex");


const getallInsightPub = async (req, res) => {
  try {
    const insightPub = await InsightPub.find({});

    res.status(StatusCodes.CREATED).json({ insightPub: insightPub});
  } catch (error) {
    console.log(error);
  }
};
const getOneInsightPub = async (req, res) => {
  try {
    const insightPub= await InsightPub.findOne({email:req.body.email});

    res.status(StatusCodes.CREATED).json({insightPub});
  } catch (error) {
    console.log(error);
  }
};


const createInsightPub= async (req, res) => {
  try {
    const insightPub= await InsightPub.create({ ...req.body });

    res.status(StatusCodes.CREATED).json(insightPub);
  } catch (error) {
    console.log(error)
  }

}

module.exports = {
  getOneInsightPub,
  getallInsightPub,
  createInsightPub
}
