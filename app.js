// import express 
const express = require("express");

// import router
const router = require("./routes/api");

// membuat objek express
const app = express();

// menggunakan middleware
app.use(express.json());
app.use(express.urlencoded());

// menggunakan router
app.use(router);

// mendefinisikan
const PORT = 3000;
app.listen(PORT, () =>
    console.log(`Serever running at: http://localhost:${PORT}`)
);