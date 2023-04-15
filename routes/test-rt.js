const controllers = require('../controllers')
const express = require('express')

// Test Router
const router = express.Router()

router.get('/hello', controllers.hello)
router.get('/sumsum', controllers.getSumSums)
router.post('/create/:name/:sumsum', controllers.postSumSums)

module.exports = router