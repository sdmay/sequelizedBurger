var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/", function (req, res) {
    res.redirect("/burgers");
});
  app.get("/burgers", function(req, res) {
   
    db.Burger.findAll({     
    }).then(function(dbBurger) {
        // console.log(dbBurger)
    //  console.log(dbBurger.title)
       
        res.render("index",  { dbBurger });
    });
  });

  app.post("/burgers/create", function(req, res) {
    // console.log(req.body.burger);
    db.Burger.create({
      title: req.body.burger,
      
    })
    .then(function(dbBurger) {
      res.redirect("/burgers")
    });
  });

 app.put("/burgers/update/:id", function(req, res) {
 
    console.log(req.body.devoured)
       db.Burger.update(
          { devoured:  1
          
           },

       {
         where: {
        id: req.body.id
      }
    })
    .then(function(dbBurger) {
      res.json(dbBurger);
    });

})
}