const express = require('express');
const morgan = require('morgan');
const app = express();


app.use(morgan('combined'));
app.use(express.static('public'));
app.use(express.json());

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
