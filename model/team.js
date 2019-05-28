var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
    teamName		  : String,
    teamId        : String,
    photo         : String,
    isDeleted     : Boolean,
    managerId     : String,
    date:{
      create      : Date,
      modify      : Date
    },
});

module.exports = mongoose.model('team', teamSchema);
