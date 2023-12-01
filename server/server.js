import express from 'express'

const PORT = 4000;

const app = express();

// Add the JSON middleware to parse our request bodies if they their Content-Type is application/json.
app.use(express.json())

app.post('/calculate', (req, res) => {
    // reading the HTTP request properties
    const queryParameters = req.query
    const a = parseInt(queryParameters.operandA)
    const b = parseInt(queryParameters.operandB)
    console.log('query parameters:', queryParameters)
  
    // doing the buisness logic
    const result = a + b;
    const responseBody = {
      operands: [a, b],
      result: result
    }
  
    // answering with a HTTP response
    res.send(responseBody)
  })

// app.post('/calculate/a/:operandA/b/:operandB', (req, res) => {
//     // reading the HTTP request properties
//     const pathParameters = req.params
//     const a = parseInt(pathParameters.operandA)
//     const b = parseInt(pathParameters.operandB)
//     console.log('path parameters:', pathParameters)
  
//     // doing the buisness logic
//     const result = a + b;
//     const responseBody = {
//       operands: [a, b],
//       result: result
//     }
  
//     // answering with a HTTP response
//     res.send(responseBody)
//   })

app.listen(PORT, function () {
  console.log(`Your server is running on port: ${PORT}`)
})