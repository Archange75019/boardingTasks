var mongoose = require('mongoose');

var companySchema = mongoose.Schema({
    nomEntreprise: {
        type: String,
        unique: false,
        required: true
    },
    siret: {
        type: String,
        unique: false,
        required: true
    },
    adresse: {
        type: String,
        unique: false,
        required: true
    },
    codePostal: {
        type: String,
        unique: true,
        required: true
    },
    ville: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    validAccount: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    validated_at : {
        type: Date
    }
});

var Company = mongoose.model("Company", companySchema);
module.exports = Company;