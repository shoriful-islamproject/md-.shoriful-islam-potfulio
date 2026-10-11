const express = require('express')
const router = express.Router();

const homecontroller = require('../controller/homecontroller')



router.get('/home', homecontroller.home);

router.get('/profile', homecontroller.profile);


router.get('/about', homecontroller.about);

router.get('/contact', homecontroller.contact);
router.post('/contactapi', homecontroller.contactapi);

router.get('/project', homecontroller.project);

module.exports = router