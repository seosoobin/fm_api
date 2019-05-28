var express = require('express');
var router = express.Router();
var adminController = require('../../controller/admin');

router

.get 	('/team',                   adminController.getTeamList)
.post 	('/team',                   adminController.createTeam)
.delete ('/team',                   adminController.deleteTeamById)
.put 	('/team/:id',               adminController.modifyTeamById)
.get 	('/team/:id',               adminController.getTeamById)
.post 	('/team/:id',               adminController.registerMangerById)
.get 	('/team/:id/manager',       adminController.getTeamManagerListById);

module.exports = router;