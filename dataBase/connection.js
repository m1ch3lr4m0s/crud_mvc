const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('crud_01', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Banco de dados Conectado!')
} catch (error) {
    console.log(error)
    return
}

module.exports = sequelize