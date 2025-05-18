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
  
  //w2v.word2phrase(input,output,{
//miniCount:"Number of times a collection of words needs to exist for it to be a phrase"
//,threshold:"determines the number of phrases, higher value means less phrases",
  //debug:"sets debug mode",
  //silent:"sets whether any output should be printed to the console"
  //},callback)

//w2v.word2vec(input,output,{
//size:"sets the size of word vectors",
//window:"sets maximal skip length between words "
//,sample:"sets threshold for occurance of words, those that appear in a higher frequency with the trainign data will be randomly down sampled (useful range is (0,1))"
//,hs:"1=use Hiearchical softmax",
//negative:"number of negative examples; common values are 3-10(0=not used)",
//threads:"number of used threads",
//iter:"number of training iterations",
//minCount:"This will discar words that appear less than minCount times"
//,alpha:"sets the starting learning rate",
//classes:"output word classes rather than word vectors"
//,debug:"sets debug mode",
//binary,"save the resulting vectors in binary mode",
//saveVocab:"the vocabulary will be saved to saveVocab value"
//,readVocab:"the vocabulary will be read from readVocab value, not constructed from the training data",
  //cbow:"use the continuous bag of words model",
  //silent:"sets whether any ouput should be printed to the console"
//},callback)

  
  w2v.loadModel('/var/task/functions/info.js',(error,model)=>{
//model object
 // .words = number of unique words in the traingin corpus
  //.size = length of the learned word vectors
//model object methods
    //.similarity = calculates the similarity between two words
//.mostSimilar(phrase[,number]) = calcualtes the cosine difference between the supplied phrase and the other word vectors in the vocabulary
//.analogy = for a pair of words in a relationship, this function tries to find the term which stands in an analogous relationship to the supplied word. If number is not supplied, bu default the 40 highest scorig results are returned
//.getVector() = returns the learned vector representations for the input word. If word does not exist in the vocabulary, the function returns null
//.getVectors([words]) = returns the learned veector representations for the supplied words. if words is undefined, i.e. the function is evoked without passing it any arguments, it returns the vectors for all learne dwords.
//.getNearestWord(vec) = returns the word which has the closest vector rpresentation to the input vec. zthe function expects a word vector, either an instance or consturctor of wordvector or an array of Number values of length size
//.getNearestWords(vec[,number]) = returns the words whose vector representations are closest to input vec.

  //Word Vector Object Props
    //.word = the word in the vocabulary
    //.values = the learned vector representation for the word, an array of lenght si
  //Word Vector Methods
      //.add(wordVector) = adds the vector of the input wordVector ot the vecotr .values
    //.subtract(wordVector) = subtracts the vector of the input wordVector to the vector .values












    
    
    res.send(model)

})})

app.use('/.netlify/functions/word2vec',router);
module.exports.handler = serverless(app)




