const userNameInput = document.getElementById("username");
const productInput = document.getElementById("product");
const reviewInput = document.getElementById("review");
const reviewForm = document.getElementById("review-form");

// TODO: Add a comment explaining the functionality of this helper function
//    accepts a `review` object, sends a POST request and returns the result.
const postReview = (review) =>
  // TODO: Add a comment explaining what sort of data we need to provide when invoking the fetch function for a POST request
  //    Fetch accepts a URL and an options object, where you can declare the HTTP method, the request body, and any headers.
  //      This is being sent over to our server as a POST.
  fetch("/api/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // TODO: Add a comment describing why one would need to convert the JSON object to a string in this instance
    //    because it is a review, it is text.
    body: JSON.stringify(review),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Successful POST request:", data);
      return data;
    })
    // TODO: Add a comment describing the functionality of the catch statement
    //    logs an error
    .catch((error) => {
      console.error("Error in POST request:", error);
    });

// Listen for when the form is submitted
reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Create a new review object from the input values of the eventListener ^
  const newReview = {
    username: userNameInput.value.trim(),
    product: productInput.value.trim(),
    review: reviewInput.value.trim(),
  };

  // Call our `postReview` method to make a POST request with our `newReview` object.
  postReview(newReview)
    .then((data) => alert(`Review added! Review ID: ${data.body.review_id}`))
    .catch((err) => console.error(err));
});
