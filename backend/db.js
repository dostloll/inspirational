const { Client } = require("pg");

const pool = new Client({
  host: "localhost",
  user: "aayush",
  port: 5432,
  password: "aayushdon",
  database: "postgres",
});

module.exports = pool;
