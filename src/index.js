require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3000

const userRoutes = require('./routes/users.routes')
const inscriptionRouter = require('./routes/inscription.routes')

// Middelwares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// routes
app.use('/users', userRoutes)
app.use('/inscription', inscriptionRouter)

// Establecemos el puerto de escucha
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port: ${PORT}`)
})
