const express = require('express')
const transactions = express.Router()
const statements = require('../models/transactions.js')

const app = require('../app.js')

// app.use(cors())
transactions.get('/', (req, res,next) => {
    res.json(statements)
})

//GET an individual view of a single transaction
transactions.get('/:index', (req, res) => {
    const {index} = req.params
    res.json(statements[index])
})

//POST/add a new transaction to the statements array
transactions.post('/', (req, res)=> {
    statements.push(req.body)
    res.json(statements[statements.length-1])
})

transactions.delete('/:index', (req, res) => {
    const {index} = req.params
    const deleted = statements.splice(index, 1)
    res.json(deleted)
})

transactions.put('/:index', (req, res) => {
    const {index} = req.params
    if (statements[index]) {
        statements[index] = req.body
        res.json(statements[index])
    }
    else {
        res.redirect('/404')
    }
})

module.exports = transactions;
