const express = require('express')
const router = express.Router();

const loginController = require('../controller/logincontroller')

// Route for login page render
router.get('/', loginController.pageget) // For displaying the main page

// Routes for login functionality
router.get('/login', loginController.loginget)    // For displaying login form
router.post('/login', loginController.loginpost) // For handling login form submission
router.get('/register', loginController.registerget)    // For displaying login form
router.post('/register', loginController.registerpost) // For handling login form submission


module.exports = router