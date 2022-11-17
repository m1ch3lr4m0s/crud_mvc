const express = require('express')
const handlebars = require('express-handlebars')
const conn = require('./dataBase/connection')
const { urlencoded } = require('express')

//models
const User = require('./models/User')

//router
const userRouter = require('./routers/userRouter')

const app = express()

//middlewares
app.use(urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

//template engine
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')

//router middlewares
app.use('/', userRouter)
app.use('/user', userRouter)

//data base connection
conn
//.sync({force:true})// usar em caso de modificação de models
.sync()
.then(()=>{
    app.listen(3000)
    console.log('Sistema rodando!')
})
.catch((error)=>{
    console.log(`Erro ao conectar com o banco de dados = ${error}`)
    return
})
