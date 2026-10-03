// const express = require("express");
import express from 'express'
import pool from './db.js';

const app = express();

// app.get()
// get , update , delete , add (CRUD)

app.get('/products', (req, res) => {
  res.json("hello")
})


pool.query("SELECT NOW()", (error, result) => {
  if (error) {
    console.log("Database Failed", error)
  }
  else {
    console.log("Database is connected", result.rows)
  }
})


pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    age INTEGER
  )
`, (error, result) => {
  if (error) {
    console.log("Table creation failed", error)
  } else {
    console.log("Users table created successfully")
  }
})


app.listen(5000, () => {
  console.log('Server running on port 5000');
});


// Supabase + database
// postgresql + mysql
// How to create tables with queries (migration file)
// Edge functions

// test cases

// http://localhost:5000/ 






