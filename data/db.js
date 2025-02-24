const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "classe138",
  password: "passwordSicura",
  database: "db_pizzeria",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

module.exports = connection;
