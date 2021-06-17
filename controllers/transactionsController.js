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

//POST/add a new transaction to the statements array
transactions.post('/new', function (req, res) {
    statements.push(req.body)
    res.json(statements[statements.length-1])
})

module.exports = transactions;
