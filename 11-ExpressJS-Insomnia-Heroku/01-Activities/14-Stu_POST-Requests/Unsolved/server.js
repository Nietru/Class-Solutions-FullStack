// Bringing in express, specifying our port and creating our app:
const express = require("express");
const PORT = 3001;
const app = express();

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get("/api/reviews", (req, res) => {
  // Your code here
  // Inform the client
  res.json(`${req.method} request received to get reviews`);
  // Log request to the terminal
  console.info(`${req.method} request recieved to get reviews`);
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
app.post("/api/reviews", (req, res) => {
  // Your code here
  // Inform the client that their post request was recieved
  res.json(`${req.method} request received to get reviews`);
  // Log request to the terminal
  console.info(`${req.method} request recieved to get reviews`);
});

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get("/api/upvotes", (req, res) => {
  // Your code here
  // Inform the client
  res.json(`${req.method} request received to retreive upvote count`);
  // Log request to the terminal
  console.info(`${req.method} request recieved to retreive upvote count`);
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
app.post("/api/upvotes", (req, res) => {
  // Your code here
  // Inform the client that their post request was recieved
  res.json(`${req.method} request received to get upvote`);
  // Log request to the terminal
  console.info(`${req.method} request recieved to get upvote`);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);

// IN CLI: in this/working directory
// npm install
// npm start
// node server.js
// IN BROWSER: "localhost:3001"
// IN INSOMNIA: ^^
