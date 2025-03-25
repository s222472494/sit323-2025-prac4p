# sit323-2025-prac4

# Simple Calculator Microservice

This microservice provides basic arithmetic operations (addition, subtraction, multiplication, and division) via a REST API.

## Setup Instructions

1. Install Node.js from https://nodejs.org/en/download/.
2. Clone this repository.
3. Run `npm install` to install the necessary dependencies.
4. Start the server with `node index.js`.
5. The service will be available at `http://localhost:3000`.

## API Endpoints

- **GET /add**: Adds two numbers.
- **GET /subtract**: Subtracts the second number from the first.
- **GET /multiply**: Multiplies two numbers.
- **GET /divide**: Divides the first number by the second (returns an error for division by zero).

## Examples

- **Addition**: `http://localhost:3000/add?num1=10&num2=5`
- **Subtraction**: `http://localhost:3000/subtract?num1=10&num2=5`
- **Multiplication**: `http://localhost:3000/multiply?num1=10&num2=5`
- **Division**: `http://localhost:3000/divide?num1=10&num2=5`

## Error Handling

- If the inputs are not valid numbers, the API will return a `400` error.
- Division by zero will return a `400` error with a message: "Division by zero is not allowed".
