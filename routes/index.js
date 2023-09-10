const express = require('express');
const router = express.Router();
const user_route = require('./user_route.js')

router.use('/user', user_route);

module.exports = router;
