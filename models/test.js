// grab the things we need
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;
var testSchema = new Schema({
    heading: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    name: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true,
      default:"#"
    },
    image:{
      type: String,
      default: "assets/img/testimonials/1.jpg"
    }
});
testSchema.plugin(autoIncrement.plugin, 'test');
var tests = mongoose.model('test', testSchema);

// make this available to our Node applications
module.exports = tests;