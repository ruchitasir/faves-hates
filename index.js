var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

// Tell express where the static files(eg css)
app.use(express.static('static'))

app.get('/', function(req, res) {
    res.render('home');
  });

/*

 app.get('/faves/foods', function(req, res) {
    res.render('faves/foods', {title: 'Favorite Foods', foods: ['coconut', 'avocado']});
  });
  
  app.get('/faves/animals', function(req, res) {
    res.render('faves/animals', {title: 'Favorite Animals', animals: ['sand crab', 'corny joke dog']})
  });


  app.get('/hates/foods', function(req, res) {
    res.render('hates/foods', {title: ' Hate Foods', foods: ['NF ', 'NF']});
  });
  
  app.get('/hates/animals', function(req, res) {
    res.render('hates/animals', {title: 'Hate Animals', animals: ['NA', 'NA']})
  });
*/

   app.use('/faves', require('./controllers/faves'));
   app.use('/hates', require('./controllers/hates'));

app.listen(3000)