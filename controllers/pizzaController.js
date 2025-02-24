// DB VERO 😊👇
const connection = require("../data/db");
// DB FAKE 👇
const pizzasData = require("../data/pizzasData");

// Index
const index = (req, res) => {
  const sql = `SELECT * FROM pizzas`;

  connection.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        error: "Database query failed",
      });
    }

    res.json(results);
  });
};

// Show
const show = (req, res) => {
  const pizzaSql = `
    SELECT pizzas.*, categories.name AS category_name
    FROM pizzas
    JOIN categories ON pizzas.category_id = categories.id
    WHERE pizzas.id = ?`;

  const ingredientsSql = `
    SELECT ingredients.id, ingredients.name
    FROM ingredients
    JOIN ingredient_pizza ON ingredient_pizza.ingredient_id = ingredients.id
    WHERE ingredient_pizza.pizza_id = ?
  `;
  const id = req.params.id;

  connection.query(pizzaSql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({
        error: "Database query failed",
      });
    }

    const pizza = results[0];

    if (!pizza) {
      return res.status(404).json({
        error: "Pizza not found",
      });
    }

    connection.query(ingredientsSql, [id], (err, results) => {
      if (err) {
        return res.status(500).json({
          error: "Database query failed",
        });
      }

      pizza.ingredients = results;

      res.json(pizza);
    });
  });

  // const pizza = pizzasData.find((elm) => elm.id == req.params.id);
  // if (!pizza) {
  //   return res.status(404).json({
  //     error: "Pizza not found",
  //   });
  // }
  // res.json(pizza);
};

// Store
const store = (req, res) => {
  const newId = pizzasData[pizzasData.length - 1].id + 1;

  const newPizza = {
    id: newId,
    name: req.body.name,
    image: req.body.image,
    ingredients: req.body.ingredients,
  };

  pizzasData.push(newPizza);

  res.status(201).json(newPizza);
};

// Update
const update = (req, res) => {
  const pizza = pizzasData.find((elm) => elm.id == req.params.id);

  if (!pizza) {
    return res.status(404).json({
      error: "Pizza not found",
    });
  }

  pizza.name = req.body.name;
  pizza.image = req.body.image;
  pizza.ingredients = req.body.ingredients;

  res.json(pizza);
};

// Modify
const modify = (req, res) => {
  const pizza = pizzasData.find((elm) => elm.id == req.params.id);

  if (!pizza) {
    return res.status(404).json({
      error: "Pizza not found",
    });
  }

  if (req.body.name) {
    pizza.name = req.body.name;
  }
  if (req.body.image) {
    pizza.image = req.body.image;
  }
  if (req.body.ingredients) {
    pizza.ingredients = req.body.ingredients;
  }

  res.json(pizza);
};

// Delete
const destroy = (req, res) => {
  // const pizza = pizzasData.find((elm) => elm.id == req.params.id);

  // if (!pizza) {
  //   return res.status(404).json({
  //     error: "Pizza not found",
  //   });
  // }

  // pizzasData.splice(pizzasData.indexOf(pizza), 1);

  // res.sendStatus(204);

  const sql = `DELETE FROM pizzas WHERE id = ?`;
  const id = req.params.id;

  connection.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({
        error: "Database query failed",
      });
    }

    res.sendStatus(204);
  });
};

module.exports = { index, show, store, update, modify, destroy };
