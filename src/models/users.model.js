const conn = require('./connectionModel').getConnection()

const getAllUsers = async () => {
  try {
    const sql = 'select * from users'
    const response = await conn.query(sql)
    return response[0]
  } catch (e) {
    return { message: 'Error al consultar los datos', error: e }
  }
}

module.exports = {
  getAllUsers
}
