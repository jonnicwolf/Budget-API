const [express, transactions, statements]
    = [ require('express'),
        express.router(),
        require('../models/transactions.js')]
        
statements.get('/', (req, res) => {
    res.json(statements)
})

module.exports = statements;
