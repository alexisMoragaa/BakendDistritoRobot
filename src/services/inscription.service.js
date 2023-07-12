const inscriptionModel = require('../models/inscription.model')

const getAllInscriptions = async () => {
  const response = await inscriptionModel.getAllInscriptions()
  console.log(response)
  return response
}

const setNewInscription = async (data) => {
  try {
    const inscription = getFormatInscription(data)
    const idInscription = await inscriptionModel.setNewInscription(inscription.inscription)

    await Promise.all(
      Object.values(inscription.participants).map((participant) => {
        return inscriptionModel.setParticipants(participant, idInscription)
      })
    )

    return { status: 'ok' }
  } catch (error) {
    console.log(error)
    return { status: 'failed', error: error.message }
  }
}

// Obtiene los datos del formulario y extrae los participantes que estan en el formulario
const getFormatInscription = (data) => {
  const inscription = {
    participants: {},
    inscription: {}
  }

  for (const key in data) {
    if (key.includes('-')) {
      const parts = key.split('-')
      const prop = parts[0]
      const index = parts[1]

      if (!inscription.participants[index]) {
        inscription.participants[index] = {}
      }
      inscription.participants[index][prop] = data[key]
    } else {
      inscription.inscription[key] = data[key]
    }
  }
  return inscription
}

module.exports = {
  getAllInscriptions,
  setNewInscription
}
