const express = require("express");

const app = express();

const pool = require("./database");

app.get("/producto", async (req, res) => {
  try {
    const conn = await pool.getConnection();

    const query = 'select * from producto';

    const rows = await conn.query(query);

    res.status(200).json(rows);
  } catch (e) {
    console.log(e);
  }
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});


//node index.js

//mysql --host 127.0.0.1 -p 3307 -u root -p

//use mydatabase;

//select database();

// insert into prodcuto ('ivan');