const express = require('express');
const registerUser = require('../controllers/userController');
const updateUserDetails = require('../controller/updateUserDetails');

const router = express.Router();
//create user api
router.post('/register',registerUser);
//check user email
router.post('/email', checkEmail);
//check user password
router.post('/password', checkPassword);
//login user details
router.get('/user-details', userDetails);
//logout user
router.get('/logout', logout);
//update user details
router.post('/update-user', updateUserDetails);

module.exports = router;