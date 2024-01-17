
const express = require('express')
const router = express.Router()

const {getallbio, getOnebio, createBio } = require('../controllers/bio')


router.post('/createbio', createBio)
router.get('/getallbios', getallbio)
router.post('/getonebio', getOnebio)

module.exports = router