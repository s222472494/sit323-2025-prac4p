const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Function to validate input numbers
const validateNumbers = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
        return { error: "Invalid input. Both num1 and num2 must be numbers." };
    }
    return null;
};

// Addition Endpoint
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json(error);

    res.json({ result: num1 + num2 });
});

// Subtraction Endpoint
app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json(error);

    res.json({ result: num1 - num2 });
});

// Multiplication Endpoint
app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json(error);

    res.json({ result: num1 * num2 });
});

// Division Endpoint
app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json(error);
    if (num2 === 0) return res.status(400).json({ error: "Cannot divide by zero." });

    res.json({ result: num1 / num2 });
});

// Starts the server
app.listen(port, () => {
    console.log(`Calculator microservice running at http://localhost:${port}`);
});

// Add http://localhost:3000/add?num1=10&num2=5
// Subtraction http://localhost:3000/subtract?num1=10&num2=5
// Multiplication http://localhost:3000/multiply?num1=10&num2=5
// Division http://localhost:3000/divide?num1=10&num2=5
