// IN THIS ACTIVITY, WE ARE ADDING TO AN EXISTING FILE INSTEAD OF MAKING NEW FILES FOR EACH SUBMIT: lines 48 - 70 in server.js
const userNameInput = document.getElementById("username");
const productInput = document.getElementById("product");
const reviewInput = document.getElementById("review");
const reviewForm = document.getElementById("review-form");

// Helper function to clear out the review form after submission
const emptyForm = () => {
  userNameInput.value = "";
  productInput.value = "";
  reviewInput.value = "";
};

// Helper function that accepts a `review` object, sends a POST request and returns the result
const postReview = (review) =>
  // Fetch accepts a URL and an options object where you can declare the HTTP method, the request body, and any headers.
  fetch("api/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Successful POST request:", data);

      // Empty the input fields
      emptyForm();
      return data;
    })
    .catch((error) => {
      console.error("Error in POST request:", error);
    });

// Listen for when the form is submitted
reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Create a new review object from the input values
  const newReview = {
    username: userNameInput.value.trim(),
    product: productInput.value.trim(),
    review: reviewInput.value.trim(),
  };

  // Call our postReview method to make a POST request with our `newReview` object.
  postReview(newReview)
    .then((data) => alert(`Review added! Review ID: ${data.body.review_id}`))
    .catch((err) => console.error(err));
});
