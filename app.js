const express = require("express");
const app = express();
const port = 3001;
// Router
const pizzasRouter = require("./routers/pizzasRouter");
const employersRouter = require("./routers/employersRouter");

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server della mia pizzeria");
});

// Registro le rotte
app.use("/pizzas", pizzasRouter);
app.use("/employers", employersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
