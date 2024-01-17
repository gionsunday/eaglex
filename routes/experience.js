
const express = require('express')
const router = express.Router()

const {getallExperience, getOneExperience, createExperience } = require('../controllers/experience')


router.post('/create/experience', createExperience)
router.get('/getall/experience', getallExperience)
router.post('/getone/experience', getOneExperience)

module.exports = router