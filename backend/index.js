const express = require('express')
const app = express()
const {Topic,Question,Answer}=require('./src/model.js')
const mongoose= require('mongoose')
mongoose.connect('mongodb://localhost:27017/test1', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log(`connection to database established`)});

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.post('/api/add_topic',(req,res) =>{
    Topic.create({   
      title:req.body.title,
      about:req.body.about
    })
    res.status(201).send("Created")
})
app.get('/api/topics',(req,res) =>{
      Topic.find({}, function(err,topics) {
        if (!err) { 
            console.log(topics);
            res.status(400).send(err);
        }
        else {
            res.status(200).send(topics)
        }
      });
app.post('/api/add_que',(req,res) =>{
    Question.create({
      question:req.body.question,
      topic:req.body.topic
    })
  })
})
app.get('/api/get_question',(req,res)=>{
    Question.find({question:req.body.topic,function(err,questions){
      if (!err) { 
        console.log(questions);
        res.status(400).send(err);
      }
      else {
        res.status(200).send(questions)
      }
      }})
})


app.listen(4000,()=> console.log('Running on Port 4000'))
