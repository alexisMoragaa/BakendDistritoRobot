const usersModel = require('../models/users.model')

const getAllUsers = async () => {
  const data = await usersModel.getAllUsers()
  console.log(data)
  return data
}

module.exports = {
  getAllUsers
}
