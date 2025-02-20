const pizzas = [
  {
    id: 1,
    name: "Margherita",
    image: `http://localhost:3001/pizze/margherita.webp`,
    ingredients: ["pomodoro", "mozzarella"],
    description:
      "La classica pizza napoletana con pomodoro fresco e mozzarella, simbolo della tradizione italiana.",
  },
  {
    id: 2,
    name: "Marinara",
    image: `http://localhost:3001/pizze/marinara.jpeg`,
    ingredients: ["pomodoro", "aglio", "origano"],
    description:
      "Una pizza semplice ma gustosa, con pomodoro, aglio e origano. Un piacere per gli amanti dei sapori autentici.",
  },
  {
    id: 3,
    name: "Diavola",
    image: `http://localhost:3001/pizze/diavola.jpeg`,
    ingredients: ["pomodoro", "mozzarella", "salame piccante"],
    description:
      "Pizza dal sapore deciso, con pomodoro, mozzarella e il tocco piccante del salame. Per chi ama il gusto forte.",
  },
  {
    id: 4,
    name: "Bufalina",
    image: `http://localhost:3001/pizze/bufalina.jpeg`,
    ingredients: ["pomodoro", "mozzarella di bufala"],
    description:
      "Una pizza prelibata con pomodoro fresco e mozzarella di bufala, per un sapore cremoso e ricco.",
  },
  {
    id: 5,
    name: "4 formaggi",
    image: `http://localhost:3001/pizze/4_formaggi.jpeg`,
    ingredients: [
      "pomodoro",
      "mozzarella",
      "gorgonzola",
      "parmigiano",
      "ricotta",
    ],
    description:
      "Una combinazione di quattro formaggi che si fondono sulla pizza, con un mix di sapori delicati e intensi.",
  },
];

module.exports = pizzas;
