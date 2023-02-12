var requestUrl = "https://api.github.com/orgs/nodejs/repos";
var badRequestUrl = "https://api.github.com/orgs/nodejddd/repad";

// open the browser and inspect > Network tab, then refresh the page with ctrl + r
// then you can see the status codes, helpful for debugging purposes.

// refer to line 1 ^ this was the successful one: status code 200
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// refer to line 2 ^ this was the unsuccessful one: status code 404
fetch(badRequestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
