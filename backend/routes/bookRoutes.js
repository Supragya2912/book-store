const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel.js');

//add books to the database
router.post('/books', async (req, res) => {

    console.log(req.body);

    try {

        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: 'Required field missing',
            });
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }

        const book = await Book.create(newBook);
        console.log(book);
        return res.status(200).json(book);


    } catch {
        res.status(500).send('Server error');
    }
});

//get all books from the database
router.get('/getBooks', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books,
        });
    } catch {
        res.status(500).send('Server error');
    }
});

//get a book by id
router.get('/getBook/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const book = await Book.findById(id);
        return res.status(200).json(book);
    } catch {
        res.status(500).send('Server error');
    }
});

//update a book by id
router.put('/updateBook/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, publishYear } = req.body;

        if (!title || !author || !publishYear) {
            return res.status(400).send({
                message: 'Required field missing',
            });
        }

        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedBook) {
            return res.status(400).send({
                message: 'Not found',
            });
        }

        console.log(updatedBook);
        return res.status(200).send({
            message: 'Updated successfully',
        });


    } catch {
        console.log('Server error');
        res.status(500).send('Server error');
    }
});

router.delete('/deleteBook/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(400).send({
                message: 'Not found',
            });
        }

        return res.status(200).send({ message: 'Deleted successfully' });

    } catch (error) {
        console.log('Server error');
        res.status(500).send('Server error');
    }
});

module.exports = router;