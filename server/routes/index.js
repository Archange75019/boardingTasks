var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/User');
var companyCtrl = require('../controllers/Company');



router.post('/register',  companyCtrl.register);
router.post('/login', userCtrl.login);






module.exports = router;