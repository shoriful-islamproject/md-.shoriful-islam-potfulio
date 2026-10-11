const express = require('express')
const router = express.Router();

const projectcontroller = require('../controller/projectcontroller')


router.get('/calculator', projectcontroller.calculator);
router.get('/currency', projectcontroller.currency);

router.get('/todo', projectcontroller.todo);
router.get('/map', projectcontroller.map);


module.exports = router