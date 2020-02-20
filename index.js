const express = require("express");
const app = express();

// respond with "hello world" when a GET request is made to the homepage
// app.get("/", function(req, res) {
//   res.send("hello world");
// });

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
