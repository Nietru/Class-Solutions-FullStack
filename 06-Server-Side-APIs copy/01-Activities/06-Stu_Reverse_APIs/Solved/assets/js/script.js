var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// Send an API request using the JQuery ajax method. On completion, the callback
// function passed to .then() will be called. $.ajax makes things a bit easier
// for developers by parsing JSON data before passing it to the callback
// function. This means that JSON.parse does not need to be used to begin using
// the data.
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Send an API request using the built-in browser fetch method. Fetch passes a
// response object when calling back the function passed to .then(). Unlike
// $.ajax, the response object contains additional information about the
// response. The response body must be parsed by using one the methods for
// parsing the response. In this example, the .json() method is used because the
// GitHub API response uses JSON for the format.
fetch(requestUrl)
  .then(function (response) {
    // In order to use the data, it must first be parsed. Use .json() when the
    // API response format is JSON.
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Send an API request using the built-in browser XMLHttpRequest object. This
// API is much older than fetch and appears in older browsers like IE.
// Construct an instance of XMLHttpRequest.
var xhr = new XMLHttpRequest();
// Assign a callback function which will be run any time the state of the request changes.
xhr.onreadystatechange = function () {
  // The readyState property is a number and  will be equal to DONE once the
  // entire response has been received.
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    // Access the response is a string in this case because the GitHub API
    // responds with JSON data. In order to use the data, it will need to be
    // converted into a JavaScript Array using JSON.parse().
    console.log(xhr.response);
  }
};

// Initialize the request
xhr.open('GET', requestUrl);

// Asynchronously send the request to the GitHub API server.
xhr.send();
