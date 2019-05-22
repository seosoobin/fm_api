var express = require('express');
var router = express.Router();
var memberController = require('../../controller/member');

router

.get 	('/', memberController.getMemberList)
.post 	('/', memberController.createMember)
.delete ('/', memberController.deleteById)
.put 	('/:id', memberController.modifyMemberById)
.get 	('/:id', memberController.getMemberById);

module.exports = router;