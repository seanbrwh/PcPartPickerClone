require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      massive = require('massive'),
      comp_case_ctrl = require('./controllers/Component_controller')

const {SERVER_PORT, CON_STRING} = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
  secret:'12p09s9s9df91',
  resave:false,
  saveUninitialized:false
}))


app.get('/api/comp-case', comp_case_ctrl.get_comp_case)

massive(CON_STRING).then(db=>{
  app.set('db',db);
  console.log('Connected To Database');

  app.listen(SERVER_PORT, ()=>{
    console.log(`Server Active on PORT:${SERVER_PORT}`)
  })
})