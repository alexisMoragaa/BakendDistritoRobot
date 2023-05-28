const app = require('express')
const router = app.Router()
const { getAllegistroParticipantes, getRegistroParticipantesById } = require('../controllers/registroParticipante.controller')

router.route('/ver-participantes').get(getAllegistroParticipantes)
router.route('/ver-participante/:id').get(getRegistroParticipantesById)

module.exports = router
