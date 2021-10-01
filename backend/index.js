const path = require('path');
const express = require('express');
const sqlDriver = require('better-sqlite3');
const { O_DIRECT } = require('constants');

// create a new web server
const app = express();




// ask the web server to serve files from the frontend files
app.use(express.static(path.join(__dirname, '../dist')));

// tell the server that it should be able to read request bodies
app.use(express.json());

// create a connection to the database
// const db = new sqlDriver('./dbse/sqlite3.db');
const db = new sqlDriver(path.join(__dirname,'../dbse/sqlite3.db'));



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

// app.post('/api/products', (req, res) => {
//     let stmt = db.prepare(
//     INSERT INTO products (name, description, price)
//     VALUES (:name, :description, :price));
//     //res.redirect('/sucess')
//     return res.json(stmt.run(req.body));
// });

// Create a new product
app.post('/api/users', (req, res) => {
  // let stmt = db.prepare(`
  //   INSERT INTO users (name, mail, password)
  //   VALUES (:name, :mail, :password
  // `));
  // console.log(req.body)
  // return res.json(stmt.run(req.body));

  let stmt = db.prepare(`
  INSERT INTO users (name, mail, password)
  VALUES (:name, :mail, :password
    )`)
  return res.json(stmt.run(req.body));

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







//POSTERS

app.get('/api/posters', (req, res) => {
  // create a db query as a prepared statement
  let stmt = db.prepare(`
    SELECT *
    FROM posters
  `);
  // run the query and return all the data
  let result = stmt.all();
  // send the result to the client as json
  res.json(result);
});

// Get one product by id
app.get('/api/posters/:id', (req, res) => {
  ;
  let stmt = db.prepare(`
    SELECT *
    FROM posters
    WHERE id = :id
  `);
  // run the query and return all the data
  let result = stmt.all({ id: req.params.id });
  // send the result to the client as json
  res.json(result);
});

// Get one product by name
app.get('/api/posters/byName/:name', (req, res) => {
  let stmt = db.prepare(`
    SELECT *
    FROM users
    WHERE name = :name
  `);
  res.json(stmt.all({ name: req.params.name }));
});

// app.post('/api/products', (req, res) => {
//     let stmt = db.prepare(
//     INSERT INTO products (name, description, price)
//     VALUES (:name, :description, :price));
//     //res.redirect('/sucess')
//     return res.json(stmt.run(req.body));
// });

// Create a new product
app.post('/api/posters', (req, res) => {
  // let stmt = db.prepare(`
  //   INSERT INTO users (name, mail, password)
  //   VALUES (:name, :mail, :password
  // `));
  // console.log(req.body)
  // return res.json(stmt.run(req.body));

  let stmt = db.prepare(`
  INSERT INTO posters (name, description, price)
  VALUES (:name, :description, :price
    )`)
  return res.json(stmt.run(req.body));

});

// Update/change a product
app.put('/api/posters/:id', (req, res) => {
  // Only change fields that are mentioned in req.body
  // (so this query is built very dynamically)
  let query = `
    UPDATE posters
    SET ${Object.keys(req.body).map(x => `${x} = :${x}`).join(', ')}
    WHERE id = :id
  `;
  console.log(query);
  // Now make a prepared statment and run it
  let stmt = db.prepare(query);
  res.json(stmt.run({ id: req.params.id, ...req.body }))
});

// Delete a product
app.delete('/api/posters/:id', (req, res) => {
  let stmt = db.prepare(`
    DELETE FROM posters WHERE id = :id
  `);
  res.json(stmt.run({ id: req.params.id }));
});





// start the web server
app.listen(4000, () => console.log('Listening on port 4000'));
