const router = require('express').Router()
const User = require('../models/User')


//CREATE USER
router.post('/cadastro', async (req, res) => {
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


//LIST USER
router.get('/', async (req, res) => {
    try {
        const users = await User.find()

        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

//UPDATE USER

router.patch('/atualizar/:id', async (req, res) => {
    const id = req.params.id

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
        const updatedUser = await User.updateOne({ _id: id }, users)

        if (updatedUser.matchedCount === 0) {
            res.status(422).json({ message: 'Usuário não encontrado!' })
            return
        }

        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

//DELETE USER
router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id

    const users = await User.findOne({ _id: id })

    if (!users) {
        res.status(422).json({ message: 'Usuário não encontrado!' })
        return
    }

    try {
        await User.deleteOne({ _id: id })

        res.status(200).json({ message: 'Usuário removido com sucesso!' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

module.exports = router