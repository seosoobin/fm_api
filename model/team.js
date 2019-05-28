var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
    teamName		  : String,
    teamId        : String,
    photo         : String,
    isDeleted     : Boolean,
    members       :[{
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
    }],
    date:{
      create      : Date,
      modify      : Date
    },
});

module.exports = mongoose.model('team', teamSchema);
