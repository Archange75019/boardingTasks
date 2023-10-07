var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    nom: {
        type: String,
        unique: false,
        required: true
    },
    prenom: {
        type: String,
        unique: false,
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
    teams: [
        {
            id: {
                type: String,
            },
            name: {
                type: String
            },
            description: {
                type: String
            },
            partenaires: [
                {
                    id: {
                        type: String
                    },
                    added_at: {
                        type: Date
                    }
                }
            ]
        }
    ],
    created_at: {
        type: Date,
        default: Date.now()
    },
    validated_at : {
        type: Date
    }
});

var User = mongoose.model("User", userSchema);
module.exports = User;