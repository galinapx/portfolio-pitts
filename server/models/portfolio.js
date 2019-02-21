const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setStringType = (maxLength) => ({ type: String, required: true, maxlength: maxLength })

const portfolioSchema = new Schema({
  userId: setStringType(512),
  title: setStringType(256),
  description: setStringType(2048),
  url_link: setStringType(256),
  img_link: setStringType(256),
  startDate: { type: Date, required: true},
  endDate: Date
});


module.exports = mongoose.model('Portfolio', portfolioSchema);
