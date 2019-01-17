var Member = require('../model/member');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = {

  getMemberList: function(req, res, next) {
    Member.find({}, /*{password:0,"points.history":0,"device.token":0,"device.os":0,"device.authCode":0},*/ function(err, members) {
      if(err) return res.status(500).json({message: err});
      if(!members) return res.status(500).json({message: 'member not found'});

      res.status(200).json({
        message:"Find Member List",
        values:members
      });
    });
  },

  createMember: function(req, res, next) {
    var memberObj = new Member(req.body);

    memberObj._id = new ObjectId();
    memberObj.date = {
      create :new Date(),
      modify :new Date()
    };

    memberObj.save(function(err){
      if(err) return res.status(500).json({message : err});     
      
      res.status(200).json({
          status:"Success",
          message:"Member Create Success.",
          values:memberObj
      });
    });
  },

  deleteById: function(req, res, next) {
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
    Member.findOne({_id: req.params.id}, /*{password:0,"points.history":0,"device.token":0,"device.os":0,"device.authCode":0},*/ function(err, member) {
      if(err) return res.status(500).json({message: err});
      if(!member) return res.status(500).json({message: 'member not found'});

      res.status(200).json({
        message:"Find Member By Object Id",
        values:member
      });
    });
  },
    
};