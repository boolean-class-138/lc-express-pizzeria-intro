const pizzasData = require("../data/pizzasData");

// Index
const index = (req, res) => {
  let pizzasFiltered = pizzasData;
  const { ingredient } = req.query;

  if (ingredient) {
    pizzasFiltered = pizzasFiltered.filter((pizza) =>
      pizza.ingredients.includes(ingredient)
    );
  }

  res.json(pizzasFiltered);
};

// Show
const show = (req, res) => {
  const pizza = pizzasData.find((elm) => elm.id == req.params.id);

  if (!pizza) {
    return res.status(404).json({
      error: "Pizza not found",
    });
  }

  res.json(pizza);
};

// Store
const store = (req, res) => {
  res.send("Creazione nuova pizza");
};

// Update
const update = (req, res) => {
  res.send(`Modifica integrale della pizza: ${req.params.id}`);
};

// Modify
const modify = (req, res) => {
  res.send(`Modifica parziale della pizza ${req.params.id}`);
};

// Delete
const destroy = (req, res) => {
  const pizza = pizzasData.find((elm) => elm.id == req.params.id);

  if (!pizza) {
    return res.status(404).json({
      error: "Pizza not found",
    });
  }

  pizzasData.splice(pizzasData.indexOf(pizza), 1);

  res.sendStatus(204);
};

module.exports = { index, show, store, update, modify, destroy };
