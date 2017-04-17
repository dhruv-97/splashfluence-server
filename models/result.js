var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var markSchema = new Schema({
    subjectID:  {
        type: Number,
        required: true
    },
    subjectCode:  {
        type: String,
        required: true
    },
    subjectName: {
        type: String,
        required: true
    },
    internal: {
        type: Number,
        required: true

    },
    external: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true

    },
    credits:{
        type: Number,
        required: true
    }
    
});
var resultSchema = new Schema({
    roll: {
        type: String,
        required: true,
        unique: true
    },
    percentage: {
        type: Number,
        required: true
    },
    creditp: {
        type: Number,
        required: true
    },
    marks: [markSchema]
    
});
var results = mongoose.model('result', resultSchema);

// make this available to our Node applications
module.exports = results;