const mysql = require('mysql2/promise')
const { DBHOST, DBUSER, DBPASS, DBDATABASE } = process.env

let con
const createConnection = module.exports.createConnection = () => {
  const config = {
    connectionLimit: 100,
    host: DBHOST,
    user: DBUSER,
    password: DBPASS,
    database: DBDATABASE,
    debug: false,
    waitForConnections: true,
    multipleStatements: true
  }
  return mysql.createPool(config)
}

module.exports.getConnection = () => {
  if (!con) { con = createConnection() }
  console.log('Connected')
  return con
}
