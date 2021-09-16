const path = require('path');
const express = require('express');
const sqlDriver = require('better-sqlite3');
const { O_DIRECT } = require('constants');

// using (var con = new SqliteConnection("data source=sqlite3.db"))
// {
//   con.Open();
//   var cmd = con.CreateCommand();
//   cmd.CommandText = "PRAGMA foreign_keys = ON";
//   cmd.ExecuteNonQuery();
//   File.Delete("../db/sqlite3.db"); // connection is open, file 
//   cmd.CommandText = @"CREATE TABLE [User] (id varchar NOT NULL)";
//   cmd.ExecuteNonQuery();
// }

// create a new web server
const app = express();

// ask the web server to serve files from the frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// tell the server that it should be able to read request bodies
app.use(express.json());

// create a connection to the database
const db = new sqlDriver('../db/sqlite3.db');

// Get/read all users
app.get('/api/users', (req, res) => {
  // create a db query as a prepared statement
  let stmt = db.prepare(`
    SELECT *
    FROM users
  `);
  // run the query and return all the data
  let result = stmt.all();
  // send the result to the client as json
  res.json(result);
});

// Get one product by id
app.get('/api/users/:id', (req, res) => {
  ;
  let stmt = db.prepare(`
    SELECT *
    FROM users
    WHERE id = :id
  `);
  // run the query and return all the data
  let result = stmt.all({ id: req.params.id });
  // send the result to the client as json
  res.json(result);
});

// Get one product by name
app.get('/api/users/byName/:name', (req, res) => {
  let stmt = db.prepare(`
    SELECT *
    FROM users
    WHERE name = :name
  `);
  res.json(stmt.all({ name: req.params.name }));
});

// Create a new product
app.post('/api/users', (req, res) => {
  let stmt = db.prepare(`
    INSERT INTO users (name, mail, password)
    VALUES (:name, :mail, :password
  `);
  res.json(stmt.run(req.body));
});

// Update/change a product
app.put('/api/users/:id', (req, res) => {
  // Only change fields that are mentioned in req.body
  // (so this query is built very dynamically)
  let query = `
    UPDATE users
    SET ${Object.keys(req.body).map(x => `${x} = :${x}`).join(', ')}
    WHERE id = :id
  `;
  console.log(query);
  // Now make a prepared statment and run it
  let stmt = db.prepare(query);
  res.json(stmt.run({ id: req.params.id, ...req.body }))
});

// Delete a product
app.delete('/api/users/:id', (req, res) => {
  let stmt = db.prepare(`
    DELETE FROM users WHERE id = :id
  `);
  res.json(stmt.run({ id: req.params.id }));
});

// start the web server
app.listen(4000, () => console.log('Listening on port 4000'));
