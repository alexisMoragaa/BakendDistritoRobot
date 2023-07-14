const conn = require('../models/connectionModel').getConnection()

const getAllInscriptions = async () => {
  try {
    const sql = 'select * from inscriptions'
    const response = await conn.query(sql)
    return response[0]
  } catch (e) {
    return { message: 'Error al recuperar los datos', error: e }
  }
}

// TODO: Inserta la inscripcion del equipo y retorna el id de inscripcion
const setNewInscription = async (data) => {
  const { nameTeam, nameRobot, pilot } = data
  try {
    const sql = `INSERT INTO inscriptions
    (
      team_name,
      name_robot,
      pilot,
      inscription_state
    ) VALUES
    (
      ${conn.escape(nameTeam)},
      ${conn.escape(nameRobot)},
      ${conn.escape(pilot)},
      1
    )
    `
    const [result] = await conn.query(sql)
    return result.insertId
  } catch (e) {
    return { message: 'Error al insertar la inscripcion del equipo', error: e }
  }
}

// TODO: Inserta los participantes de un equipo
const setParticipants = async (data, idInscription) => {
  const { name, rut, correo, phone } = data
  try {
    const sql = `INSERT INTO participants
    (
      name,
      rut,
      phone,
      mail,
      id_inscription
    ) VALUES
    (
      ${conn.escape(name)},
      ${conn.escape(rut)},
      ${conn.escape(phone)},
      ${conn.escape(correo)},
      ${conn.escape(idInscription)}
    )
    `
    return await conn.query(sql)
  } catch (e) {
    throw new Error('Error al insertar los participante: ' + e.message)
  }
}

module.exports = {
  getAllInscriptions,
  setNewInscription,
  setParticipants
}
