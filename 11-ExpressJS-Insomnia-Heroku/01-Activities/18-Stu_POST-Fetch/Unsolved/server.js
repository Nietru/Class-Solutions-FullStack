const express = require("express");
const path = require("path");
// Helper method for generating unique ids, see uuid.js
const uuid = require("./helpers/uuid");
const reviews = require("./db/reviews"); // see reviews.js

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET request for reviews
app.get("/api/reviews", (req, res) => {
  console.info(`GET /api/reviews`);
  res.status(200).json(reviews);
});

// GET request for a single review
app.get("/api/reviews/:review_id", (req, res) => {
  if (req.params.review_id) {
    console.info(`${req.method} request received to get a single a review`);
    const reviewId = req.params.review_id;
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId) {
        res.json(currentReview);
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

  // TODO: Add a comment describing the functionality of following line of code:
  //      We are destructuring assignment for the items in req.body, Grabbing from index.js < see lines 14 and 30 - 34.
  const { product, review, username } = req.body;

  // TODO: Add a comment describing why we would check to see if the following properties exist before entering the code block
  if (product && review && username) {
    // Variable for the object we will save. User enters on the front end:
    const newReview = {
      product,
      review,
      username,
      upvotes: Math.floor(Math.random() * 100),
      review_id: uuid(),
    };

    const response = {
      status: "success",
      body: newReview,
    };

    console.log(response);

    // TODO: Add a comment explaining the functionality of res.json()
    //    to let the client know that the response was successful for the newReview.
    res.status(201).json(response);
  } else {
    // TODO: Add a comment describing the purpose of the else statement in this POST request.
    //    status' in the 500s are errors.
    res.status(500).json("Error in posting review");
  }
});

// GET request for a specific review's upvotes
app.get("/api/upvotes/:review_id", (req, res) => {
  console.info(`${req.method} request received to get upvotes for a review`);
  for (let i = 0; i < reviews.length; i++) {
    const currentReview = reviews[i];
    if (currentReview.review_id === req.params.review_id) {
      res.json({
        message: `The review with ID ${currentReview.review_id} has ${currentReview.upvotes}`,
        upvotes: currentReview.upvotes,
      });
      return;
    }
  }
  res.json("Review ID not found");
});

// POST request to upvote a review
app.post("/api/upvotes/:review_id", (req, res) => {
  if (req.body && req.params.review_id) {
    console.info(`${req.method} request received to upvote a review`);
    const reviewId = req.params.review_id;
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId) {
        currentReview.upvotes += 1;
        res.json(`New upvote count is: ${currentReview.upvotes}!`);
        return;
      }
    }
    res.json("Review ID not found");
  }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
