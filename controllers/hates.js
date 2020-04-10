// create a router to hold our routes
let router = require('express').Router()


router.get('/foods', function(req, res) {
    res.render('hates/foods', {title: ' Hate Foods', foods: ['NF ', 'NF']});
  });
  
  router.get('/animals', function(req, res) {
    res.render('hates/animals', {title: 'Hate Animals', animals: ['NA', 'NA']})
  });

  //Export the routes so that we can include them in our file
module.exports = router;