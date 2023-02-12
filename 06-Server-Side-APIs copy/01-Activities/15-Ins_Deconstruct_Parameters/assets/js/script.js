fetch("https://api.github.com/gists/public?since=2020-06-01&per_page=100")
  // ^ chaining paramaters at the end of our url to get more specific data response: page=100
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
