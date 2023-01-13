const {DataTypes} = require("sequelize");
const {createDB} = require("../config/db");

const Book = createDB.define("books", {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    dateOfRelease: DataTypes.STRING,
    bookImage: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
});

module.exports = Book;