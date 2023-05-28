require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const userRoutes = require('./routes/users.routes')

// const registroParticipantesRoutes = require('./routes/registroParticipantes.routes')

// Middelwares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
// app.use('/api/v1/registro-participantes', registroParticipantesRoutes)
app.use('/users', userRoutes)

// Establecemos el puerto de escucha
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port: ${PORT}`)
})
