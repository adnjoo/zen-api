const { Pool } = require("pg");
const router = require("express").Router();
require("dotenv").config();
// local use
// const { host, user, database, password, port } = require("./config");

// const pool = new Pool({
//   host,
//   user,
//   database,
//   password,
//   port,
// });

// deployment
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const getKoans = (req, res) => {
  let { id } = req.query;
  if (id) {
    // console.log(id);
    pool
      .query("SELECT * FROM koans WHERE id = $1", [id])
      .then((results) => {
        res.status(200).send(results.rows);
      })
      .catch((err) => console.log(err));
  } else {
    pool
      .query("SELECT * FROM koans")
      .then((results) => {
        res.status(200).send(results.rows);
      })
      .catch((err) => console.log(err));
  }
};

const test = (req, res) => {
  res.status(200).send("Testing Zen API");
};

module.exports = {
  test,
  getKoans,
};
