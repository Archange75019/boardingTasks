
var bcrypt = require('bcrypt')
var string = require("string-sanitizer");

const jwt = require('jsonwebtoken');
const axios = require('axios');
const User = require('../models/User');


//Inscription utilisateur
exports.register = (req, res, next) => {
    User.findOne({ 'email': req.body.data.email })
        .then(email => {
            if (email) {
                res.json({
                    success: false,
                    message: 'Un compte existe déjà avec cet email'
                })
            } else {
                bcrypt.hash(req.body.data.password, 10)
                    .then(hash => {
                        var user = {
                            nom: req.body.data.nom,
                            prenom: req.body.data.prenom,
                            email: req.body.data.email,
                            password: hash
                        }
                        var userDef = new User(user)
                        userDef.save()
                            .then(user => {
                                if (user) {
                                    res.json({
                                        success: true,
                                        message: 'Utilisateur crée avec succès'
                                    })
                                }

                            })

                    })
            }
        })

}
//Connexion utilisateur
exports.login = (req, res, next) => {
   
    User.findOne({ 'email': req.body.data.email })
        .then(user => {
            if (!user) {
                res.json({
                    success: false,
                    message: 'Information utilisateur incorrecte'
                })
            }
            bcrypt.compare(req.body.data.password, user.password)
                .then(valid => {
                    if (!valid) {
                        res.json({
                            success: false,
                            message: 'Information utilisateur incorrecte'
                        })
                    }
                    console.log('valid  :', valid)
                 })
        })


}

exports.logout = async (req, res, next) => {
    var myquery = { _id: req.body.data };
    var newvalues = { $set: { online: false } };
    let status = await Company.findOneAndUpdate(myquery, newvalues).then(stat => {

        if (!stat.online) {
            res.json({
                'success': 'true',
                'message': 'déconnecté'
            })
        }
    })
}