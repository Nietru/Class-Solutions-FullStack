fetch("https://api.github.com/repos/nodejs/node/issues?per_page=5", {
  // these values depend on the api and its documentation:
  method: "GET", //GET is the default.
  credentials: "same-origin", // include, *same-origin, omit
  redirect: "follow", // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
