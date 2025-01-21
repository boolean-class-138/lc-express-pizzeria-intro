const express = require('express')
const app = express()
const port = 3001
// Router
const pizzasRouter = require('./routers/pizzas')
const employersRouter = require('./routers/employers')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Server della mia pizzeria')
})

app.use('/pizzas', pizzasRouter)
app.use('/employers', employersRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})