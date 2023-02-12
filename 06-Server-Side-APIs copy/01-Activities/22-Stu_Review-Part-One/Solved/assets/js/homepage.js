var userFormEl = document.querySelector("#user-form");
var languageButtonsEl = document.querySelector("#language-buttons");
var nameInputEl = document.querySelector("#username");
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");

/* README INSTRUCTIONS: 
Work with a partner to add comments describing the functionality of the code found in the HTML 
  and JavaScript files in [Unsolved](./Unsolved)
## 📝 Notes
Refer to the documentation: 
[GitHub API documentation](https://docs.github.com/en/rest/overview/resources-in-the-rest-api) */

var formSubmitHandler = function (event) {
  event.preventDefault();

  var username = nameInputEl.value.trim();

  if (username) {
    getUserRepos(username);

    repoContainerEl.textContent = "";
    nameInputEl.value = "";
  } else {
    alert("Please enter a GitHub username");
  }
};

var buttonClickHandler = function (event) {
  // `event.target` is a reference to the DOM element of what programming language button was clicked on the page
  // GETTING THE ATTRIBUTE OF WHATEVER 'DATA-LANGUAGE' IS IN THE HTML, THE THREE BUTTONS ON THE PAGE.
  //EVENT.TARGET TARGETS THE SPECIFIC BUTTONS BASED ON THE EVENT THAT WE PASSED IN.
  var language = event.target.getAttribute("data-language");

  // If there is no language read from the button, don't attempt to fetch repos
  if (language) {
    // THIS IS WRAPPED IN AN IF STATEMENT SO THAT IT ONLY WORKS ON THE THREE BUTTONS WE ARE TARGETING.
    getFeaturedRepos(language); // GETFEATUREDREPOS IS DEFINED ON LINE 64(BELOW), LANGUAGE IS DEFINED IN LINE 33 ^

    repoContainerEl.textContent = ""; // SETS THE TEXT CONTENT TO EMPTY.
  }
};

var getUserRepos = function (user) {
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          displayRepos(data, user);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to GitHub");
    });
};

var getFeaturedRepos = function (language) {
  // The `q` parameter is what language we want to query, the `+is:featured` flag adds a filter to return only featured repositories
  // The `sort` parameter will instruct GitHub to respond with all of the repositories in order by the number of issues needing help
  var apiUrl =
    "https://api.github.com/search/repositories?q=" +
    language +
    "+is:featured&sort=help-wanted-issues";

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayRepos(data.items, language);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  });
};

var displayRepos = function (repos, searchTerm) {
  if (repos.length === 0) {
    repoContainerEl.textContent = "No repositories found.";
    // Without a `return` statement, the rest of this function will continue to run and perhaps throw an error if `repos` is empty
    return;
  }

  repoSearchTerm.textContent = searchTerm;

  for (var i = 0; i < repos.length; i++) {
    // The result will be `<github-username>/<github-repository-name>`
    var repoName = repos[i].owner.login + "/" + repos[i].name;

    var repoEl = document.createElement("div");
    repoEl.classList = "list-item flex-row justify-space-between align-center";

    var titleEl = document.createElement("span");
    titleEl.textContent = repoName;

    repoEl.appendChild(titleEl);

    var statusEl = document.createElement("span");
    statusEl.classList = "flex-row align-center";

    if (repos[i].open_issues_count > 0) {
      statusEl.innerHTML =
        "<i class='fas fa-times status-icon icon-danger'></i>" +
        repos[i].open_issues_count +
        " issue(s)";
    } else {
      statusEl.innerHTML =
        "<i class='fas fa-check-square status-icon icon-success'></i>";
    }

    repoEl.appendChild(statusEl);

    repoContainerEl.appendChild(repoEl); //ADDING THINGS TO THE EMPTY DIV FROM HTML LINE 67,
    //  BECAUSE WE DONT KNOW HOW LONG THE SEARCH RESULTS LIST IS GOING TO BE.
  }
};

userFormEl.addEventListener("submit", formSubmitHandler);
languageButtonsEl.addEventListener("click", buttonClickHandler);
