const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user_controller')
 
router.post('/registration', user_controller);
router.post('/login', user_controller);
router.get('/auth', user_controller);

module.exports = router;