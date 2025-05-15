'use strict'
var w2v = require('word2vec');
var mysql = require('mysql2')
var serverless = require('serverless-http')
var express = require('express')
var app = express();
var router = express.Router();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get('/',(req,res)=>{w2v.loadModel('/info.txt',(error,model)=>{

res.send(model)

})})

app.use('/.netlify/functions/word2vec',router);
module.exports.handler = serverless(app)




