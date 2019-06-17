var express = require('express');
var router = express.Router();
var teamController = require('../../controller/team');

router

.get 	('/',                       teamController.getTeamList)
.get 	('/:id/member',             teamController.getMemberList)
.post 	('/:id/member',             teamController.createMember)
//.delete ('/:id/member', teamController.deleteMemberById)
.put 	('/:id/member/:mid',        teamController.modifyMemberById)
.get 	('/:id/member/:mid',        teamController.getMemberById);

module.exports = router;