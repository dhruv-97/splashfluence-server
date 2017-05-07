// grab the things we need
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;
var memberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    designation:{
        type: String,
        required: true
    },
    image: {
      type: String,
      required: true
    },
    facebook: {
      type: String,
      default: "#"
    },
    twitter: {
      type: String,
      default: "#"
    },
    linkedin:{
      type: String,
      default: "#"
    }
});
memberSchema.plugin(autoIncrement.plugin, 'member');
var members = mongoose.model('member', memberSchema);

// make this available to our Node applications
module.exports = members;