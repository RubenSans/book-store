const database = require('../lib/database');

// Método GET para obtener todos los libross
exports.getAllBooks = async (req, res) => {
    try {
        const [results] = await database.query('SELECT * FROM books');
        res.json(results);
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ error: 'Database error', details: err });
    }
};

// Método GET para obtener un libros por referencia
exports.getBookByReference = async (req, res) => {
    const reference = req.params.reference;
    try {
        const [results] = await database.query('SELECT * FROM books WHERE reference = ?', [reference]);
        if (results.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(results[0]);
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ error: 'Database error', details: err });
    }
};

// Método POST para crear un libros
exports.createBook = async (req, res) => {
    const productData = req.body;
    try {
        const [results] = await database.query('INSERT INTO books SET ?', productData);
        res.status(201).json({ message: 'Product created', bookId: results.insertId });
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ error: 'Database error', details: err });
    }
};

// Método PUT para actualizar un libros por referencia
exports.updateBook = async (req, res) => {
    const reference = req.params.reference;
    const productData = req.body;
    try {
        const [results] = await database.query('UPDATE books SET ? WHERE reference = ?', [productData, reference]);
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json({ message: 'Book updated' });
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ error: 'Database error', details: err });
    }
};

// Método DELETE para eliminar un libros por referencia
exports.deleteBook = async (req, res) => {
    const reference = req.params.reference;
    try {
        const [results] = await database.query('DELETE FROM books WHERE reference = ?', [reference]);
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json({ message: 'Book deleted' });
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ error: 'Database error', details: err });
    }
};