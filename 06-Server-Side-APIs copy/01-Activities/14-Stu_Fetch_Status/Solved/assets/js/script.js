var badRequestUrl = "https://api.github.com/orgs/nodejs/oreps";

var responseText = document.getElementById("response-text");

/* It's done when a request is made to an invalid API URL, 
and the 404 status displays on the page. */

function getApi(badRequestUrl) {
  fetch(badRequestUrl) // had to change the variable name to match line 1 ^
    .then(function (response) {
      console.log(response.status);
      //  Conditional for the the response.status.
      if (response.status !== 200) {
        //!== means not equal to, but this could also be === 404 instead.
        // Place the response.status on the page.
        responseText.textContent = response.status;
      }
      return response.json();
    })
    .then(function (data) {
      /* Make sure to look at the response in the console and read how 404 response is
       structured. */
      console.log(data);
    });
}

getApi(badRequestUrl);
