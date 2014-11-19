var express = require('express'),
  bodyParser = require('body-parser'), 
 app = express();
var wines = require("./routes/wines");
var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

 
app.use(bodyParser.urlencoded());

app.get('/wines', wines.FindAll);
app.get('/wines/:id', wines.FindbyId);
app.post('/wines', wines.addWine);
app.put('/wines/:id', wines.updateWine);
app.delete('/wines/:id', wines.deleteWine)

 app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

app.listen(3000);
console.log("The application is running on 3000")