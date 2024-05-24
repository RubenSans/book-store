const express = require('express');
const { getAllBooks, getBookByReference, createBook, updateBook, deleteBook } = require('../lib/data');
const router = express.Router();

router.get('/books', getAllBooks);
router.get('/books/:reference', getBookByReference);
router.post('/books', createBook);
router.put('/books/:reference', updateBook);
router.delete('/books/:reference', deleteBook);

module.exports = router;