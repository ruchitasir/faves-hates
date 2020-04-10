// create a router to hold our routes
let router = require('express').Router()


router.get('/foods', function(req, res) {
    res.render('faves/foods', {title: 'Favorite Foods', foods: ['coconut', 'avocado']});
  });
  
  router.get('/animals', function(req, res) {
    res.render('faves/animals', {title: 'Favorite Animals', animals: ['sand crab', 'corny joke dog']})
  });

  //Export the routes so that we can include them in our file
module.exports = router;