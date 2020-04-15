// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
 // add this for heroku
 // ~~~~~~~vvvvvvvvvvvvvvvvvvv~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var customers = [];
var waitlist = [];


// Routes
// =============================================================

// Basic route to adding a customer

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  // Displays all tables
app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

app.get("/api/customers/:customers", function(req, res) {
    var chosen = req.params.customer;
  
    console.log(chosen);
  
    for (var i = 0; i < customers.length; i++) {
      if (chosen === customers[i].routeName) {
        return res.json(customers[i]);
      }
    }
  
    return res.json(false);
  });

  // Create New Table for WAITLIST - takes in JSON input
app.post("/api/waitlist", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newCustomer = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newCustomer.routeName = newCustomer.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newCustomer);
  
    characters.push(newCustomer);
  
    res.json(newCustomer);
  });

  
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
