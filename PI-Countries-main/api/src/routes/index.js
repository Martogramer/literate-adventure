const { Router } = require('express');
const {
    getCountries,
    getCountriesById
} = require('../routes/ctrls/country')
const {
    getActivitiesByName,
    postActivity
} = require('../routes/ctrls/activity')

const router = Router();
const {Country, Activity, country_activity} = require('../db')

router.get("/countries", getCountries)
router.get("/countries/:id", getCountriesById)
router.get("/activities", getActivitiesByName)
router.post("/activity", postActivity)

module.exports = router;
