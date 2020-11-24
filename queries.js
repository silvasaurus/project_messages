// const { response } = require("express");

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "bigbootyjudy",
  host: "localhost",
  database: "messages",
  password: "",
  port: 5432,
});

const getMessages = (req, res) => {
  pool.query("SELECT * FROM messages ORDER BY time DESC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const createMessage = (req, res) => {
  const { sender_id, recipient_id, content } = req.body;
  console.log(req.body);
  pool.query(
    "INSERT INTO messages (sender_id, recipient_id, content) VALUES ($1, $2, $3)",
    [sender_id, recipient_id, content],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`Successful Transmission`);
    }
  );
};

const getUsers = (req, res) => {
  pool.query("SELECT * FROM users ORDER BY id", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const createUser = (req, res) => {
  const { user_type, user_id } = req.body;

  pool.query(
    "INSERT INTO users (user_type, user_id) VALUES ($1, $2)",
    [user_type, user_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`Added User`);
    }
  );
};

module.exports = {
  getMessages,
  createMessage,
  getUsers,
  createUser,
};
