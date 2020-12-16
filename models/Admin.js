const Sequelize = require("sequelize")
const db = require("../database/db")


module.exports = db.sequelize.define(
    'admin',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Username:{
            type:Sequelize.STRING
        },
        Password:{
            type: Sequelize.STRING
        }
    }, 
    {
        timestamps: false
    }
)