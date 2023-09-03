
const express = require('express');
const connectMongo = require('./db.js');
const cors = require('cors');

const bookRoutes = require('./routes/bookRoutes.js');

const PORT = 8000;

connectMongo();

const app = express();
app.use(express.json()); // middleware to parse JSON

app.use(
    cors({
        origin: 'http://localhost:3000',
        method: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
