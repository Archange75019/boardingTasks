var mongoose = require('mongoose');

var TasksSchema = mongoose.Schema({
    idTeam: {
        type: String
    },
    tasks: [
        {
            titre: {
                type: String
            },
            idEmetteur: {
                type: String
            },
            description: {
                type: String
            },
            idDestinataire: {
                type: String
            },
            created_at: {
                type: Date,
                default: Date.now()
            },
            updated_at: {
                type: Date
            },
            deadline: {
                type: Date
            },
            filePath: [
                {
                    path: {
                        type: String
                    },
                    added_at: {
                        type: Date,
                        default: Date.now()
                    }
                }
            ],
            percentage: {
                type: String
            },
            status: {
                type: String
            }
        }
    ]
});

var Tasks = mongoose.model("Tasks", TasksSchema);
module.exports = Tasks;