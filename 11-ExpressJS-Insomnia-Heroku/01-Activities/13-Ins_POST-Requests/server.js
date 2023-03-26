const express = require("express");

const PORT = 3001;

const app = express();

// GET Route/request at http://localhost:3001/api/reviews
app.get("/api/reviews", (req, res) => {
  // Let the client know that their request was received, .method > was a "Get" and will return in json format.
  res.json(`${req.method} request received`);

  // Show the user agent information in the terminal/console
  // the rawHeaders are auto completed by insomnia and are sent with every request.
  console.info(req.rawHeaders);

  // Log our request to the terminal
  console.info(`${req.method} request received`);
});

// POST Route/request/endpoint:
app.post("/api/reviews", (req, res) => {
  // Let the client know that their POST request was received
  res.json(`${req.method} request received`);

  // Show the user agent information in the terminal
  console.info(req.rawHeaders);

  // Log our request to the terminal
  console.info(`${req.method} request received`);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);

// IN CLI:
// npm install
// npm start
// node server.js
// INSOMNIA: "POST" http://localhost:3001/api/reviews and should get something back in the console ^^ console.info
