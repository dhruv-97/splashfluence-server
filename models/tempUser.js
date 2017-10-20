var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TempUser = new Schema({
    username: String,
    password: String,
    phone: String,
    email: String,
    brand: {
      type: Boolean,
      required: true
    },
    GENERATED_VERIFYING_URL: String,
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
module.exports = mongoose.model('TempUser', TempUser);