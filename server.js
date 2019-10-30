const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 9000;
//helpers de hbs
require('./hbs/helpers/helpers');



app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');

app.get('/',(req,res)=>{
  res.render('home.hbs',{
    nombre:'felipex'
  });
});

app.get('/about',(req,res)=>{
  res.render('about.hbs');
});
app.listen(port);
