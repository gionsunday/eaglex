
const express = require('express')
const router = express.Router()

const {getallPosition, getOnePosition, createPosition } = require('../controllers/position')


router.post('/createposition', createPosition)
router.get('/getallposition', getallPosition)
router.post('/getoneposition', getOnePosition)

module.exports = router