var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({
  name		      : String,
  id            : String,
  email         : String,
  nationality   : String,
  photo         : String,
  isDeleted     : Boolean,
  position      : [String],
  date:{
    create      : Date,
    modify      : Date
  },
  age           : Number
});

module.exports = mongoose.model('member', memberSchema);
