const express = require('express')
const mongoose = require('mongoose')

const { get } = require('mongoose')

const app = express()
const Course = require('./models/Course')



app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// ROTAS DA API 

const userRoutes = require('./routes/userRoutes')
app.use('/user/cadastro', userRoutes)

const courseRoutes = require('./routes/courseRoutes')
app.use('/courses', courseRoutes)




const DB_USER = 'admin'
const DB_PASS = '1234'

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASS}@apicursos.2yxi6fk.mongodb.net/bancodaapi?retryWrites=true&w=majority`,
    )
    .then(() => {
        console.log("Banco de dados conectado!")
        app.listen(3000)

    })
    .catch((err) => { console.log(err) })
