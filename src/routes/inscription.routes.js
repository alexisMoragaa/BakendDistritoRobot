const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer()

const inscriptionController = require('../controllers/inscription.controller')

router
  .get('/ver-inscripciones', inscriptionController.getAllInscriptions)
  .post('/set-new-inscription', upload.none(), inscriptionController.setNewInscription)

module.exports = router
