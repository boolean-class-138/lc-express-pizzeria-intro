const express = require("express")
const pizzasData = require("../data/pizzas")

const router = express.Router()

// Index
router.get('/', (req, res) => {
    res.json(pizzasData)
})

// Show
router.get('/:id', (req, res) => {
    if(isNaN(req.params.id)) {
        return res.sendStatus(400)
    }
    
    const pizza = pizzasData.find((elm) => elm.id == req.params.id )
    
    if(!pizza) {
        return res.sendStatus(404)
    }

    res.json(pizza)
})

// Store
router.post('/', (req, res) => {
    res.send('Creazione nuova pizza')
})

// Update
router.put('/:id', (req, res) => {
    res.send(`Modifica integrale della pizza: ${req.params.id}`)
})

// Modify
router.patch('/:id', (req, res) => {
    res.send(`Modifica parziale della pizza ${req.params.id}`)
})

// Delete
router.delete('/:id', (req, res) => {
    res.send(`Eliminazione della pizza: ${req.params.id}`)
})

module.exports = router;