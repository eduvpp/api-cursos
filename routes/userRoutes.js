const router = require('express').Router()
const User = require('../models/User')


//CREATE USER
router.post('/', async (req, res) => {
    const { email, name, user, phone, bdage, pass } = req.body

    const users = {
        email,
        name,
        user,
        phone,
        bdage,
        pass,
    }

    try {
        await User.create(users)

        res.status(201).json({ message: 'Cadastrado realizado com sucesso!' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

module.exports = router