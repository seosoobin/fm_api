var Team = require('../model/team');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = {

  createTeam: function(req, res, next) {
    var teamObj = new Team(req.body);

    teamObj._id = new ObjectId();
    teamObj.date = {
      create :new Date(),
      modify :new Date()
    };

    teamObj.save(function(err){
      if(err) return res.status(500).json({message : err});     
      
      res.status(200).json({
          status:"Success",
          message:"Team Create Success.",
          values:teamObj
      });
    });
  },

  deleteTeamById: function(req, res, next) {
    Team.deleteOne({_id: req.body._id}, /*{password:0,"points.history":0,"device.token":0,"device.os":0,"device.authCode":0},*/ function(err, team) {
      if(err) return res.status(500).json({message: err});
      if(!team) return res.status(500).json({message: 'Team not found'});

      res.status(200).json({
        message:"Delete Team By Object Id",
        values:team
      });
    });
  },

  modifyTeamById: function(req, res, next) {
    var updateObj = new Object();

    updateObj = req.body;

    Team.update({_id:req.params.id},
    {
      $set : updateObj
    }, {"multi": false}, function(err2, numAffected){
    if(err2){ console.log(err2);return res.status(500).json({message: err2})};

      res.status(200).json({
        message:"Team modify success.",
        values:numAffected
      });
    });   
  },

  getTeamById: function(req, res, next) {
    Team.findOne({_id: req.params.id}, /*{password:0,"points.history":0,"device.token":0,"device.os":0,"device.authCode":0},*/ function(err, team) {
      if(err) return res.status(500).json({message: err});
      if(!team) return res.status(500).json({message: 'team not found'});

      res.status(200).json({
        message:"Find Team By Object Id",
        values:team
      });
    });
  },

  getTeamManagerListById: function(req, res, next) {
    Team.findOne({_id: req.params.id}, /*{password:0,"points.history":0,"device.token":0,"device.os":0,"device.authCode":0},*/ function(err, team) {
      if(err) return res.status(500).json({message: err});
      if(!team) return res.status(500).json({message: 'team not found'});

      res.status(200).json({
        message:"Find Managers By Team Object Id",
        values:team.managers_id
      });
    });
  },

  registerMangerById: function(req, res, next) {
    Team.findOne({_id: req.params.id}, /*{password:0,"points.history":0,"device.token":0,"device.os":0,"device.authCode":0},*/ function(err, team) {
      if(err) return res.status(500).json({message: err});
      if(!team) return res.status(500).json({message: 'team not found'});

      team.managers_id = req.body.managers_id;

      team.save(function(err){
        if(err) return res.status(500).json({message : err});     
        
        res.status(200).json({
            status:"Success",
            message:"Successed to add Manager.",
            values:team
        });
      });
    });
  },    

};