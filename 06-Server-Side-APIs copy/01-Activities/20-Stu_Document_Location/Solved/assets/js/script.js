var badRequestUrl = "https://api.github.com/unicorns";
var redirectUrl = "./404.html";
/* * As a developer, I want to direct users to a different page if there is an error.
## Acceptance Criteria
* It's done when I make a `fetch()` request that results in a 404 status, 
 and the browser redirects to `404.html`. */

fetch(badRequestUrl).then(function (response) {
  // Check the response value is equal to 404.
  if (response.status === 404) {
    // If the page is not on the 404 page, redirect to it.
    document.location.replace(redirectUrl); // if you use asign instead of replace,
    // you can use the back button to go back.
  } else {
    return response.json();
  }
});
