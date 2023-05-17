const express = require('express')

const {
    registerUser,
    login,
    userDetails,
    editProfile
} = require('../Controllers/userController')

const userProtect = require('../Middlewares/authMiddleware');
const router = express.Router()


router.route('/register').post(registerUser);
router.route('/login').post(login);
router.route('/userDetails').get(userProtect,userDetails);
router.route('/editProfile').post(userProtect,editProfile);



module.exports = router