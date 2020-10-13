const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controllers');
// Retrieve all users
router.get('/', userController.findAll);
// Create a new user
router.post('/insert', userController.create);

router.post('/search', userController.searchList);


module.exports = router