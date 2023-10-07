var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var Company = require('../models/Company')

async function getToken() {
    var token;
    const response = await axios.post('https://api.insee.fr/token',
        new URLSearchParams({ 'grant_type': 'client_credentials' }),
        {
            headers: {
                'Authorization': 'Basic YUc5U3k2azlZck1rYzA5bDNRSzZKd2ZlaHAwYTpfOVIyODlNY1VZbkg5Q1c4aGJfRkEyeEl5ZnNh'
            }
        })
        .then(function (response) {
            token = response.data.access_token;
        })
        .catch(function (error) {
            console.log(error);
        });
    return token
}
//Inscription utilisateur
exports.register = (req, res, next) => {
    Company.findOne({ 'siret': req.body.data.siret })
        .then( company => {
            if (company) {
                res.json({
                    success: false,
                    message: 'Un compte existe déjà avec cet email'
                })
            } else {
                bcrypt.hash(req.body.data.password, 10)
                    .then(hash => {
                        var user = {
                            nomEntreprise: req.body.data.nomEntreprise,
                            siret: req.body.data.siret,
                            adresse: req.body.data.adresse,
                            codePostal: req.body.data.codePostal,
                            email: req.body.data.email,
                            password: hash
                        }
                        var adminAccount = new Company(user)
                        adminAccount.save()
                            .then(accountAdmin => {
                                if (accountAdmin) {
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