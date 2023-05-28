const express = require('express')
const router = express.Router()
const userController = require('../controllers/users.controller')

router
  .get('/ver-usuarios', userController.showAllUsers)

module.exports = router
