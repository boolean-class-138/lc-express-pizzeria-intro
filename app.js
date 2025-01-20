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
        },
        {
          name: "Marinara",
          image: `http://localhost:${port}/pizze/marinara.jpeg`,
          ingredients: ["pomodoro", "aglio", "origano"],
        },
        {
          name: "Diavola",
          image: `http://localhost:${port}/pizze/diavola.jpeg`,
          ingredients: ["pomodoro", "mozzarella", "salame piccante"],
        },
        {
          name: "Bufalina",
          image: `http://localhost:${port}/pizze/bufalina.jpeg`,
          ingredients: ["pomodoro", "mozzarella di bufala"],
        },
        {
          name: "4 formaggi",
          image: `http://localhost:${port}/pizze/4_formaggi.jpeg`,
          ingredients: ["pomodoro", "mozzarella", "gorgonzola", "parmigiano", "ricotta"],
        }
    ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})