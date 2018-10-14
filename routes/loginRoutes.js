var path = require("path");

var express = require("express");

var app = express();
var passport = require("passport");

app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })
);