var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({
  memberName		: String,
  memberId      : String,
  email         : String,
  nationality   : String,
  photo         : String,
  isDeleted     : Boolean,
  teamName      : String,
  position      : [String],
	date:{
		create      : Date,
		modify      : Date
  },
});

module.exports = mongoose.model('member', memberSchema);
