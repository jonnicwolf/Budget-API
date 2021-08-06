const express = require('express')
const cors = require('cors')

const app = express()
const transactionsController = require('./controllers/transactionsController')
app.use((req, res, next) => {
  console.log(`${req.url}`)
  next()
})
app.use(cors());
app.use(express.json());

app.get("/", (req, res,next) => {
  res.send("Welcome to the budgeting app!");
});

app.use('/transactions', transactionsController)

app.get('*', (req, res) => {
    res
        .status(404)
        .send('Page not found.')
})

module.exports = app