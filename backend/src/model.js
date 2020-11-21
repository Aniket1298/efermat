const mongoose = require('mongoose');
const topicSchema = new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true,
    },
    about:{
        type:String,
        required:true,
    }
})
const queSchema = new mongoose.Schema({
    question:{
        type:String
    },
    topic:{type:String,required:true}
})
const ansSchema = new mongoose.Schema({
    answer:{
        type:String,   
    },
    question_id :{type: mongoose.Schema.Types.ObjectId, ref: 'Question'}
})
var Topic = mongoose.model('Topic', topicSchema);
var Question = mongoose.model('Question', queSchema);
var Answer = mongoose.model('Answer', ansSchema);
module.exports ={Topic,Question,Answer} ;