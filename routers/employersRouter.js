const express = require('express')

const router = express.Router()

// Index
router.get('/', (req, res) => {
    res.send('Lista dei dipendenti')
})

// Show
router.get('/:id', (req, res) => {
    res.send(`Dettagli del dipendente: ${req.params.id}`)
})

// Store
router.post('/', (req, res) => {
    res.send('Creazione nuovo dipendente')
})

// Update
router.put('/:id', (req, res) => {
    res.send(`Modifica integrale del dipendente: ${req.params.id}`)
})

// Modify
router.patch('/:id', (req, res) => {
    res.send(`Modifica parziale del dipendente ${req.params.id}`)
})

// Delete
router.delete('/:id', (req, res) => {
    res.send(`Eliminazione del dipendente: ${req.params.id}`)
})

module.exports = router