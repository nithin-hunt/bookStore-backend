const {Sequelize} = require("sequelize");

const createDB = new Sequelize('BOOK STORE', 'user', 'pass', {
    dialect: 'sqlite',
    host: './config/db.sqlite',
});

const connectDB = () => {
    createDB.sync().then( () => {
        console.log("Connected to DB...");
    })
    .catch((e) => {
        console.log("DB connection failed", e);
    })
};

module.exports = {createDB, connectDB};