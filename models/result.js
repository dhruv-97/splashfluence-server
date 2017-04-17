var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var markSchema = new Schema({
    subjectID:  {
        type: String,
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
        type: String,
        required: true

    },
    external: {
        type: String,
        required: true
    },
    total: {
        type: String,
        required: true

    },
    credits:{
        type: String,
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
        type: String,
        required: true
    },
    creditp: {
        type: String,
        required: true
    },
    marks: [markSchema]
    
});
var results = mongoose.model('result', resultSchema);

// make this available to our Node applications
module.exports = results;