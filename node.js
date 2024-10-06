const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// In-memory storage for user credentials
let users = [];

// Registration endpoint
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const userExists = users.find(user => user.email === email);

    if (userExists) {
        return res.status(400).json({ message: 'Email already exists!' });
    }

    users.push({ name, email, password });
    res.status(201).json({ message: 'You have registered successfully!' });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password!' });
    }

    res.status(200).json({ message: 'You have logged in successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
