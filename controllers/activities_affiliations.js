const ActiveAffiliate = require("../models/activities_affiliations");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  unAuthenticatedError,
} = require("../errors/errorsIndex");


const getallActiveAffiliate = async (req, res) => {
  try {
    const activeAffiliate = await ActiveAffiliate.find({});

    res.status(StatusCodes.CREATED).json({ activeAffiliate: activeAffiliate});
  } catch (error) {
    console.log(error);
  }
};
const getOneActiveAffiliate = async (req, res) => {
  try {
    const activeAffiliate= await ActiveAffiliate.findOne({email:req.body.email});

    res.status(StatusCodes.CREATED).json({activeAffiliate});
  } catch (error) {
    console.log(error);
  }
};


const createActiveAffiliate= async (req, res) => {
  try {
    const activeAffiliate= await ActiveAffiliate.create({ ...req.body });

    res.status(StatusCodes.CREATED).json(activeAffiliate);
  } catch (error) {
    console.log(error)
  }

}

module.exports = {
  getOneActiveAffiliate,
  getallActiveAffiliate,
  createActiveAffiliate
}
