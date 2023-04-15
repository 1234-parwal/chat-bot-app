const express = require('express')
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const router = express.Router()

router.get('/', (req, res) => {
    res.send('server is up and running')
})

module.exports = router