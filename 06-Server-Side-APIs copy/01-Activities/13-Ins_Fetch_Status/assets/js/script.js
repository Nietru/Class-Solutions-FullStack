var requestUrl = "https://api.github.com/orgs/nodejs/repos?per_page=5";

var responseText = document.getElementById("response-text");

function getApi(requestUrl) {
  fetch(requestUrl).then(function (response) {
    console.log(response);
    if (response.status === 200) {
      // if the status code is 200 (aka a success) then we are gonna change the font to the code nubmer:
      responseText.textContent = response.status; // using the status property with response.
    }
    return response.json();
  });
}

getApi(requestUrl);
