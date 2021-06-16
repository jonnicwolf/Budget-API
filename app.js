const express = require('express')
const cors = require('cors')

const app = express()
const transactionsController
    = require('./controllers/transactionsController')

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the budgeting app!");
});

app.use('/transactions', transactionsController)


module.exports = app;
