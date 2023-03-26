const express = require("express");

const PORT = 3001;
const reviews = require("./db/reviews");

const app = express();

// TODO: Implement middleware for the parsing of JSON data
app.use(express.json());
// TODO: Implement middleware for parsing of URL encoded data, makes string an object with key value pairs.
// Note: `urlencoded` data represents a URL encoded form. If we had HTML form with: `username` and `password`,
//        our urlencoded data would be "username=JohnAppleseed". Adds additional security.
app.use(express.urlencoded({ extended: true }));
// GET request for ALL reviews
app.get("/api/reviews", (req, res) => {
  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);

  // Sending all reviews to the client in json format, and should get a status code 200 = success
  return res.status(200).json(reviews);
});

// GET request for a single review, the notation with the `:` review_id, is an optional parameter. Grab a single review id and plug it in:
app.get("/api/reviews/:review_id", (req, res) => {
  if (req.params.review_id) {
    console.info(`${req.method} request received to get a single a review`);
    const reviewId = req.params.review_id;
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId) {
        res.status(200).json(currentReview);
        return;
      }
    }
    res.status(404).send("Review not found");
  } else {
    res.status(400).send("Review ID not provided");
  }
});

// POST request to add a review
app.post("/api/reviews", (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // Prepare a response object to send back to the client
  let response;

  // Check if there is anything in the response body
  if (req.body && req.body.product) {
    response = {
      status: "success",
      data: req.body,
    };
    res.status(201).json(response);
  } else {
    res.status(400).json("Request body must at least contain a product name");
  }

  // Log the response body to the console
  console.log(req.body);
});

// POST request to upvote a particular review
app.post("/api/upvotes/:review_id", (req, res) => {
  if (req.body && req.params.review_id) {
    console.info(`${req.method} request received to upvote a review`);
    const reviewId = req.params.review_id;
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId) {
        currentReview.upvotes += 1;
        res.status(200).json(`New upvote count is: ${currentReview.upvotes}!`);
        return;
      }
    }
    res.status(404).json("Review ID not found");
  }
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);

// IN CLI: in this/working directory
// npm install
// npm start
// node server.js
// IN BROWSER: "localhost:3001"
// IN INSOMNIA: ^^ POST has to have something in the body for upvoting an existing review,
//                 even though it doesnt use the body for this. SEND to upvote! (:
