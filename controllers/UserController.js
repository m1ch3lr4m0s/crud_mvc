const User = require('../models/User')

module.exports = class UserController{
    static async view(req, res){
        res.render('user/view')
    }
}