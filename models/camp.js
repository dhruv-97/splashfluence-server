// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var campSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    website:{
        type: String,
        required: true
    },
    email: {
      type: String,
      required: true
    },
    audience: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    lastDate:{
      type: String,
      required: true
    },
    influencers: {
      type: [{
        type: Schema.Types.ObjectId,
        ref: 'Influencer'
      }]
    },
    imageUrl: {
      type: String
    }
},
{
  timestamps: true
});
var camps = mongoose.model('camp', campSchema);

// make this available to our Node applications
module.exports = camps;