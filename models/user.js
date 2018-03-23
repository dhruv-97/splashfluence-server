var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
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
module.exports = mongoose.model('User', User);