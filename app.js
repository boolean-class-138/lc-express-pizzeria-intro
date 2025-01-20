const express = require('express')
const app = express()
const port = 3001

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Server della mia pizzeria')
})

app.get('/menu', (req, res) => {
    res.json([
        {
            name: 'Margherita',
            image: `http://localhost:${port}/pizze/margherita.webp`,
            ingredients: ['pomodoro', 'mozzarella']
        }
    ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})