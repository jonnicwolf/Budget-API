const express = require('express')
const transactions = express.Router()
const statements = require('../models/transactions.js')

transactions.get('/', (req, res) => {
    res.json(statements)
})

module.exports = transactions;
