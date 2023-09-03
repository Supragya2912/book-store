
const express = require('express');
const connectMongo = require('./db.js');

const bookRoutes = require('./routes/bookRoutes.js');

const PORT = 8000;

connectMongo();

const app = express();
app.use(express.json()); // middleware to parse JSON

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
