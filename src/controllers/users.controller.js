const userService = require('../services/users.services')

// Retorna todos los usuarios registrados en la base de datos
const showAllUsers = async (req, res) => {
  const getData = await userService.getAllUsers()
  res.status(200).json(getData)
}

module.exports = {
  showAllUsers
}
