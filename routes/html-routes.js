var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {


  app.get("/", function(req, res) {
    res.render('index');
  });



}

// C:\Hangman\sequelizedBurger\views\layouts\main.handlebars