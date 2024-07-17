const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/register", cors(), (req, res) => {});
app.post("/register", cors(), (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 5, (err, hash) => {
    if (err) {
      console.log(err);
      return;
    }

    pool
      .connect()
      .then(() => console.log("Connected to the database"))
      .catch((err) => console.error("Connection error", err.stack));

    const query = "insert into people (email,password) values ($1,$2)";
    const values = [email, hash];
    pool
      .query(query, values)
      .then((res) => {
        console.log("User added to database.");
        pool.end();
      })
      .then(res.json({ success: true }))
      .catch((err) => {
        console.error("Error executing query", err.stack);
        pool.end();
      });
  });

  // bcrypt.compare(password, hash, (err, result) => {
  //   if (err) {
  //     throw err;
  //   }
  //   if (result) {
  //     console.log("Password matches");
  //   } else {
  //     console.log("Doesn't match.");
  //   }
  // });
});

app.listen(3000, () => {
  console.log("Running at port 3000");
});
