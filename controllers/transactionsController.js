const express = require('express')
const transactions = express.Router()
const statements = require('../models/transactions.js')

transactions.get('/', (req, res) => {
    res.json(statements)
})

//GET an individual view of a single transaction
transactions.get('/:index', (req, res) => {
    const index = req.params.index
    res.json(statements[index])
})

module.exports = transactions;
