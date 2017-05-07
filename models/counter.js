// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var counterSchema = new Schema({
    seq: {
        type: Number
    }
});
var counters = mongoose.model('counter', counterSchema);

// make this available to our Node applications
module.exports = counters;