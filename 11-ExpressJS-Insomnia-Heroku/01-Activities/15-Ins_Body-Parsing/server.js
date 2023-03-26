const express = require("express");

const PORT = 3001;
const reviews = require("./db/reviews");

const app = express();

// app.use > Middleware for intercepting a request and response halfway thru and parsing it to turn it into json:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET request for ALL reviews
app.get("/api/reviews", (req, res) => {
  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);

  // Sending all reviews to the client, with our reviews variable from line 4, using the reviews.js file:
  return res.json(reviews);
});

// POST request to add a +review
app.post("/api/reviews", (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // Prepare a response object to send back to the client
  let response;

  // Check if there is anything in the response body that was sent over thru POST:
  // also is saying via .product that it has to have a product name.
  if (req.body && req.body.product) {
    response = {
      status: "success",
      data: req.body,
    };
    // sends this to the client if successful:
    res.json(`Review for ${response.data.product} has been added!`);
  } else {
    res.json("Request body must at least contain a product name");
  }

  // Log the response body to the console
  console.log(req.body);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);

// IN CLI: in this/working directory
// npm install
// npm start
// node server.js
// IN BROWSER: "localhost:3001"
// IN INSOMNIA: ^^ Go to body and change to JSON and add an object with a review!! then hit SEND
