const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json()); 


app.get('/data', (req, res) => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => res.send(data))
    .catch(error => console.error('Error:', error));
    
});

app.get('/', (req, res) => {
    res.send("hello Ahmad !!");
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});