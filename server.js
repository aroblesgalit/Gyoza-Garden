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

const reservations = [
  {
    routeName: "alvin",
    customerName: "Alvin", 
    phoneNumber: "(512)4204200",
    customerEmail: "alvinIsAg@gmail.com",
    customerID: "pwnYou69"
}
];

const waitlist = [
  {
    routeName: "robyn",
    customerName: "Robyn",
    phoneNumber: "(512)1234567",
    customerEmail: "robynIsCool@gmail.com",
    customerID: "robynWaits11"
  }
];


// Routes
// =============================================================

// Basic route to adding a customer

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  // Displays all tables
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
  });

    // Displays waitlist
app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
  });

      // Displays waitlist
app.get("/api/reservations", function(req, res) {
  res.json(reservations);
  });

        // Displays waitlist
app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
  });

  // Create New Table for WAITLIST - takes in JSON input
app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newCustomer = req.body;
  
    console.log(newCustomer);
    if(reservations.length < 5){
      reservations.push(newCustomer);
      return res.json(true) 
    
    } else {

    }
  
    res.json(newCustomer);
  });

  
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
