var resultTextEl = document.querySelector("#result-text");
var resultContentEl = document.querySelector("#result-content");
var searchFormEl = document.querySelector("#search-form");

function getParams() {
  // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
  var searchParamsArr = document.location.search.split("&");

  // Get the query and format values
  var query = searchParamsArr[0].split("=").pop(); // .POP REMOVES THE FIRST ELEMENT IN THE ARRAY, AFTER THE '?': 'Q' HERE.
  var format = searchParamsArr[1].split("=").pop(); // .POP REMOVES THE SECOND ELEMENT IN THE ARRAY, AFTER THE '?': '=' HERE.
  // THIS FIVES US A LIST OF ALL OF THE PARAMETERS: WE HAVE THE QUERY AND WE HAVE THE FORMAT BASED ON THE URL:
  searchApi(query, format); // SEARCHAPI IS DEFINED ON LINE 60 (BELOW):
}

function printResults(resultObj) {
  console.log(resultObj);

  // set up `<div>` to hold result content
  var resultCard = document.createElement("div");
  resultCard.classList.add("card", "bg-light", "text-dark", "mb-3", "p-3");

  var resultBody = document.createElement("div");
  resultBody.classList.add("card-body");
  resultCard.append(resultBody);

  var titleEl = document.createElement("h3");
  titleEl.textContent = resultObj.title;

  var bodyContentEl = document.createElement("p");
  bodyContentEl.innerHTML =
    "<strong>Date:</strong> " + resultObj.date + "<br/>";

  if (resultObj.subject) {
    bodyContentEl.innerHTML +=
      "<strong>Subjects:</strong> " + resultObj.subject.join(", ") + "<br/>";
  } else {
    bodyContentEl.innerHTML +=
      "<strong>Subjects:</strong> No subject for this entry.";
  }

  if (resultObj.description) {
    bodyContentEl.innerHTML +=
      "<strong>Description:</strong> " + resultObj.description[0];
  } else {
    bodyContentEl.innerHTML +=
      "<strong>Description:</strong>  No description for this entry.";
  }

  var linkButtonEl = document.createElement("a");
  linkButtonEl.textContent = "Read More";
  linkButtonEl.setAttribute("href", resultObj.url);
  linkButtonEl.classList.add("btn", "btn-dark");

  resultBody.append(titleEl, bodyContentEl, linkButtonEl);

  resultContentEl.append(resultCard);
}

function searchApi(query, format) {
  var locQueryUrl = "https://www.loc.gov/search/?fo=json"; // CREATING THE URL THAT WE ARE GOING TO SEARCH.

  if (format) {
    locQueryUrl = "https://www.loc.gov/" + format + "/?fo=json";
  }

  locQueryUrl = locQueryUrl + "&q=" + query;

  fetch(locQueryUrl)
    .then(function (response) {
      if (!response.ok) {
        // IF !RESPONSE .. MEANS IT IS NOT OK/SUCCESSFUL
        throw response.json(); // THEN WE ARE GOING TO THROW AN ERROR.
      }

      return response.json();
    })
    .then(function (locRes) {
      // IF ITS OK/SUCCESSFUL THEN WE GET OUR RESULTS WITH (LOCRES).
      // write query to page so user knows what they are viewing
      resultTextEl.textContent = locRes.search.query; // POPULATES THE RESULT TEXT AT THE TOP WITH WHAT THE USER SEARCHED FOR.

      console.log(locRes);

      if (!locRes.results.length) {
        // IF NO RESULTS ARE FOUND:
        console.log("No results found!"); // THEN WE DISPLAY NO RESULTS FOUND!
        resultContentEl.innerHTML = "<h3>No results found, search again!</h3>";
      } else {
        // IF RESULTS ARE FOUND:
        resultContentEl.textContent = "";
        for (var i = 0; i < locRes.results.length; i++) {
          printResults(locRes.results[i]); // WE ARE GOING TO PRINT ALL THE RESULTS VIA PRINTRESULTS ^^ DEFINED LINE 16,
          // POPULATES RESULTS FROM RESULTS OBJ, REFERENCED FROM THE API DOC "RESPONSES" FOR LIBRARY OF CONGRESS API.
        }
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}
function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector("#search-input").value;
  var formatInputVal = document.querySelector("#format-input").value;

  if (!searchInputVal) {
    console.error("You need a search input value!");
    return;
  }

  searchApi(searchInputVal, formatInputVal);
}
searchFormEl.addEventListener("submit", handleSearchFormSubmit);

getParams();
