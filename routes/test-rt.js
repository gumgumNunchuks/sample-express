const test = require('../controllers')
const express = require('express')

// Test Router
const router = express.Router()

router.get('/hello', test.test)

module.exports = router