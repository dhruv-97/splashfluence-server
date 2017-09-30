var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Brand = new Schema({
    brand_name: String,
    brand_url: String,
    active: [{
        type: Schema.Types.ObjectId,
        ref: 'camp'
    }]
});

Brand.plugin(passportLocalMongoose);

module.exports = mongoose.model('Brand', Brand);