const express = require('express')
const app = express()
const morgan  = require('morgan')
const cors = require('cors')
const config = require('./config/index')
const registroParticipantesRoutes = require("./routes/registroParticipantes.routes")

// const registroRoutes = required("")

//Middelwares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.disable('etag')
app.use('/api/v1/registro-participantes', registroParticipantesRoutes)

//Enviroments var
const node_env = process.env.BACKEND_ENV || "local" 
const PORT = config[node_env].PORT

app.listen( PORT, () => { console.log(`Run on port: ${PORT}`)})


