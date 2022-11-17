const { DataTypes } = require('sequelize')
const dataBase = require('../dataBase/connection')

const User = dataBase.define('users', {
    nome:{
        type: DataTypes.STRING,
        required: true
    },
    email:{
        type: DataTypes.STRING,
        required: true
    }
})

module.exports = User