var express = require('express'),
  bodyParser = require('body-parser'), 
 app = express();
var wines = require("./routes/wines");
 

app.get('/wines', wines.FindAll);
app.get('/wines/:id', wines.FindbyId);
app.post('/wines', wines.addWine);
app.put('/wines/:id', wines.updateWine);
app.delete('/wines/:id', wines.deleteWine)

app.listen(3000);
console.log("The application is running on 3000")