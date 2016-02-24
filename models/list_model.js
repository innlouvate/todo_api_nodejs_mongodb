var mongoose = require('mongoose');

var listSchema = mongoose.Schema( {
  id: Number,
  task: String,
  owner: String
})

module.exports = mongoose.model('List', listSchema);
