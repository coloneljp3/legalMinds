'use strict'
var w2v = require('word2vec')
var mysql = require('mysql2')
var serverless = require('serverless-http')
var express = require('express')
var app = express();
var router = express.Router();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
router.get('/',(req,res)=>{
res.send('Yo mr White whats up Im skylar white yo whats up you wanna cook some crystal yo')

})

app.use('/.netlify/functions/info',router);
module.exports.handler = serverless(app)
