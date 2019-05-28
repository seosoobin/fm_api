var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
    teamName		  : String,
    teamId        : String,
    photo         : String,
    isDeleted     : Boolean,
    managers_id     : [{ type: Schema.Types.ObjectId, ref: 'member', index: true }],
    date:{
      create      : Date,
      modify      : Date
    },
});

module.exports = mongoose.model('team', teamSchema);
