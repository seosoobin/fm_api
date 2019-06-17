var Member = require('../model/member');
var Team = require('../model/team');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = {

  getTeamList: function(req, res, next) {
    Team.find({}, /*{password:0,"points.history":0,"device.token":0,"device.os":0,"device.authCode":0},*/ function(err, teams) {
      if(err) return res.status(500).json({message: err});
      if(teams.length == 0) return res.status(500).json({message: 'There is no team.'});

      res.status(200).json({
        message:"Find Team List",
        values:teams
      });
    });
  },

  getMemberList: function(req, res, next) {
    Team.findOne({_id: req.params.id}, /*{password:0,"points.history":0,"device.token":0,"device.os":0,"device.authCode":0},*/ function(err, team) {
      if(err) return res.status(500).json({message: err});
      if(!team) return res.status(500).json({message: 'team not found'});

      res.status(200).json({
        message:"Find Member List By Object Id",
        values:team.members
      });
    });
  },

  createMember: function(req, res, next) {
    Team.findOne({_id: req.params.id}, /*{password:0,"points.history":0,"device.token":0,"device.os":0,"device.authCode":0},*/ function(err, team) {
      if(err) return res.status(500).json({message: err});
      if(!team) return res.status(500).json({message: 'team not found'});

      var memberObj = new Member(req.body);

        memberObj.date = {
        create :new Date(),
        modify :new Date()
        };

      team.members.push(memberObj);
        
      team.save(function(err){
        if(err) return res.status(500).json({message : err});     
        
        res.status(200).json({
            status:"Success",
            message:"Member Create Success.",
            values:team
        });
      });

    });

  },

  deleteMemberById: function(req, res, next) {
    Member.deleteOne({_id: req.body._id}, /*{password:0,"points.history":0,"device.token":0,"device.os":0,"device.authCode":0},*/ function(err, member) {
      if(err) return res.status(500).json({message: err});
      if(!member) return res.status(500).json({message: 'member not found'});

      res.status(200).json({
        message:"Delete Member By Object Id",
        values:member
      });
    });
  },

  modifyMemberById: function(req, res, next) {
    var updateObj = new Object();

    updateObj = req.body;

    Member.update({_id:req.params.id},
    {
      $set : updateObj
    }, {"multi": false}, function(err2, numAffected){
    if(err2){ console.log(err2);return res.status(500).json({message: err2})};

      res.status(200).json({
        message:"Member modify success.",
        values:numAffected
      });
    });   
  },

  getMemberById: function(req, res, next) {
    Team.findOne({_id: req.params.id}, /*{password:0,"points.history":0,"device.token":0,"device.os":0,"device.authCode":0},*/ function(err, team) {
      if(err) return res.status(500).json({message: err});
      if(!team) return res.status(500).json({message: 'team not found'});

      var member = new Object();
      
      team.members.filter(function(v,i){
        if(v._id == req.params.mid){
          member = v;
        }
      });

      res.status(200).json({
        message:"Find Member By Object Id",
        values:member
      });
    });
  },
    
};