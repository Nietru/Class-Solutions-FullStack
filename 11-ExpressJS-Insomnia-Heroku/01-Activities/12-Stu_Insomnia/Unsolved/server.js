const express = require("express");
// TODO: Require the json file located in `/db` for data.
const pulls = require("./db/repos.json");
// TODO: Create an `app` variable set to the value of `express()`
const app = express();
// "/" does a get request for the default:
app.get("/", (req, res) => {
  res.send(
    'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
  );
});

// TODO: Create a GET route for `/api` that will return the content of our json file to the client.
app.get("/api", (req, res) => res.json(pulls));

// TODO: Have the app listen on OUR port 3001
app.listen(3001, () => console.log("Express Server on port 3001!"));

// IN CLI: in this/working directory
// npm install
// npm start
// node server.js
// IN BROWSER: "localhost:3001"
// IN INSOMNIA: ^^ and you should "Get" all of the contents of the json file.
