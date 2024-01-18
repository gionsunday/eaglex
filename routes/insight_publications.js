
const express = require('express')
const router = express.Router()

const {getOneInsightPub, getallInsightPub, createInsightPub } = require('../controllers/insights_publications')


router.post('/create/insight_publications', createInsightPub)
router.get('/getall/insight_publications', getallInsightPub)
router.post('/getone/insight_publications', getOneInsightPub)

module.exports = router