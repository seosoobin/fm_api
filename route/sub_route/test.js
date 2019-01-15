var express = require('express');
var router = express.Router();
var testController = require('../../controller/test');

router.get('/', testController.getTest);

module.exports = router;