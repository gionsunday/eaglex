
const express = require('express')
const router = express.Router()

const {getOneActiveAffiliate, getallActiveAffiliate, createActiveAffiliate} = require('../controllers/activities_affiliations')


router.post('/create/activities_affiliations', createActiveAffiliate)
router.get('/getall/activities_affiliations', getallActiveAffiliate)
router.post('/getone/activities_affiliations', getOneActiveAffiliate)

module.exports = router