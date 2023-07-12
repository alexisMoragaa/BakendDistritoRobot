const inscriptionService = require('../services/inscription.service')

const getAllInscriptions = async (req, res) => {
  const response = await inscriptionService.getAllInscriptions()
  return res.status(200).json(response)
}

const setNewInscription = async (req, res) => {
  const response = await inscriptionService.setNewInscription(req.body)
  return res.status(201).json(response)
}

module.exports = {
  getAllInscriptions,
  setNewInscription
}
