const RegistroParticipantes = require("../models/registroParticipantes.model");

exports.getAllegistroParticipantes = async (req, res) => {
    try {
        const response = await RegistroParticipantes.findAll()
        return res.status(200).json({data: response})
    } catch (error) {
        res.status(505).send({message: `No funciona la wea ${error}`})
    }
}


exports.getRegistroParticipantesById = async (req, res) => {
    try {
        const { id } = req.params
        const userFound = await RegistroParticipantes.findOne({
            where:{id},
            attributes: ['nombreEquipo']
        })

        if(!userFound)
            return res.status('401').send('Usuario no encontrado')
        else
            return res.status(200).json({data: userFound})
            
    } catch (error) {
        res.status(505).send({message: `No funciona la wea ${error}`})
    }
}
