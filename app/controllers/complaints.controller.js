const fs = require("fs");
const User = require('../models/complaints.model');
const express = require('express'),
    bodyParser = require('body-parser');


exports.list = function(req, res){
    User.getAll(function(result){
        res.json(result);
    });
};


exports.create = async function (req, res) {

    let user_data = {
        "username": req.body.username,
        "email": req.body.email,
        "givenname": req.body.givenName,
        "familyname": req.body.familyName,
        "password": req.body.password
    };

    if (validateEmail(req.body.email) === false) return res.sendStatus(400);
    if (req.body.password === "") return res.sendStatus(400);

    let values = [
        user_data['username'],
        user_data['email'],
        user_data['givenname'],
        user_data['familyname'],
        hashCode(user_data['password'])
    ];

    User.insert(values,function(result){
        if (result.errno != undefined){
            if (result.errno === 1062)return res.sendStatus(400);
            return res.sendStatus(400);
        }
        res.status(201).json({"userId":result.insertId});
    });
};
