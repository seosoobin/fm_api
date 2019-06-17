var express = require('express');
var router = express.Router();
var adminController = require('../../controller/admin');
var teamController = require('../../controller/team');

router

.get 	('/team',                   teamController.getTeamList)
.post 	('/team',                   adminController.createTeam)
.delete ('/team',                   adminController.deleteTeamById)
.put 	('/team/:id',               adminController.modifyTeamById)
.get 	('/team/:id',               adminController.getTeamById)
.post 	('/team/:id',               adminController.registerMangerById)
.get 	('/team/:id/manager',       adminController.getTeamManagerListById);

module.exports = router;