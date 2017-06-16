// grab the things we need
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;
var eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
   	description: {
   		type: String,
   		required: true
   	},
   	bg: {
   		type: String,
   		enum: ['assets/img/portfolio/bg-1.jpg','assets/img/portfolio/bg-2.jpg','assets/img/portfolio/bg-3.jpg','assets/img/portfolio/bg-4.jpg'],
   		default: 'assets/img/portfolio/bg-1.jpg'
   	},
    place: {
      type: String,
      required: true
    },
    images: {
      type: [String],
      required: true
    },
    featured: {
      type: Boolean,
      required: true
    }
});
eventSchema.plugin(autoIncrement.plugin, {
    model: 'event',
    startAt: 0
});
var events = mongoose.model('event', eventSchema);

// make this available to our Node applications
module.exports = events;