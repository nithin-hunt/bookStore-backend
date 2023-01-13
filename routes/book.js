const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");

router.post("/add", async(req,res) => {
    try{
        const {name, author, genre, dateOfRelease, bookImage, rating, price} = req.body;

        if(!name || !author || !genre || !dateOfRelease || !rating || !price) {
            return res.status(400).json("All fields are required");
        }
        if(!Number.isInteger(price)) {
            return res.status(400).json("Price should be a number");
        }
        if(!Number.isInteger(rating)) {
            return res.status(400).json("Rating should be a number");
        }

        let bookDetails = {
            name,
            author,
            genre,
            dateOfRelease,
            bookImage,
            rating,
            price
        }

        const createdBook = await Book.create(bookDetails);

        return res.status(201).json({
            status: "ok",
            bookDetails: createdBook
    });
    } catch(e) {
        return res.status(400).json({err: e});
    }
});



module.exports = router;