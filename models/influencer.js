var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Influencer = new Schema({
    facebook: String,
    twitter: String,
    instagram: String,
    youtube: String,
    blog: String,
    category: String,
    location: String,
    applied: [{
        type: Schema.Types.ObjectId,
        ref: 'camp'
    }]
});

Influencer.plugin(passportLocalMongoose);

module.exports = mongoose.model('Influencer', Influencer);