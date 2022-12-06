const router = require('express').Router()
const Course = require('../models/Course')


//CREATE CURSOS
router.post('/cadastro', async (req, res) => {
    const { name, description, link } = req.body

    const courses = {
        name,
        description,
        link,
    }

    try {
        await Course.create(courses)

        res.status(201).json({ message: 'Curso cadadastrado com sucesso!' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})


//LIST CURSOS

router.get('/', async (req, res) => {
    try {
        const courses = await Course.find()

        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})


//UPDATE CURSO

router.patch('/atualizar/:id', async (req, res) => {
    const id = req.params.id

    const { name, description, link } = req.body

    const courses = {
        name,
        description,
        link,
    }

    try {
        const updatedCourse = await Course.updateOne({ _id: id }, courses)

        if (updatedCourse.matchedCount === 0) {
            res.status(422).json({ message: 'Usuário não encontrado!' })
            return
        }

        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

module.exports = router