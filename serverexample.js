//Using the previous example as a guide, create an app that has two web servers.

// Here we require/import the HTTP module
var http = require("http");

//One that listens on port 7000 and one that listens on port 7500.
var PORTONE = 7000;
var PORTTWO = 7500;

//The one listening on port 7000 will always tell the user something good about themselves.

// Here we create a generic function to handle requests and responses
function handleRequestOne(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("You are awesome!!!" + request.url);
}

//The one listening on 7500 will always tell the user something bad about themselves.
// Here we create a generic function to handle requests and responses
function handleRequestTwo(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("You are mean!!!" + request.url);
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var serverOne  = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

// Here we start our serverOne so that it can begin listening to client requests.
serverOne.listen(PORTONE, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORTONE);

});

// Here we start our serverTwo so that it can begin listening to client requests.
serverTwo.listen(PORTTWO, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORTTWO);

});

//sure you create a Github repo and commit this code!
//Bonus:
//Look for other ways to expand what your server can do. As possibilities:
//Generate the good / bad phrase randomly from a list of predefined phrases
//Use the twitter package inside the response to also return a random tweet




