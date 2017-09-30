var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    username: String,
    password: String,
    OauthId: String,
    OauthToken: String,
    phone: String,
    email: String,
    brand: {
      type: Boolean,
      required: true
    },
    brandRef: {
      type: Schema.Types.ObjectId,
      ref: 'Brand'
    },
    influencerRef: {
      type: Schema.Types.ObjectId,
      ref: 'Influencer'
    }
},
{timestamps: true});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);