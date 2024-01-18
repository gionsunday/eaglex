const fs = require('fs')
const path = require('path')
const multer = require('multer')
const Profile_Img = require('../models/pictures')
const cloudinary = require('../utils/cluidinary')
const {StatusCodes} = require('http-status-codes')

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, '/uploads')
    },
    filename: (req, file, cb) =>{
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({dest: '../uploads'})
const getProfileImage = async (req, res) =>{
    const profileImage = await Profile_Img.find({creator:req.params.creator})
    res.status(StatusCodes.OK).json({ profileImage})
}

const uploadProfileImage = async  (req, res, next) =>{
const files = req.files
console.log(files)
const filepath = files[0].path
console.log(filepath)

const result = await cloudinary.v2.uploader.upload(filepath, {
    folder: "eaglex/team/pictures"
})
console.log(result)

 const {secure_url, name} = result
        req.body.img_url = secure_url
        const productImage = await Profile_Img.create({...req.body})
        res.status(StatusCodes.CREATED).json({productImage})
    
}





module.exports = {
    getProfileImage,
    uploadProfileImage,
  
}

