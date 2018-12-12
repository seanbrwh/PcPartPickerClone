require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      massive = require('massive'),
      comp_crtl = require('./controllers/Component_controller'),
      user_crtl = require('./controllers/User_controller'),
      list_crtl = require('./controllers/ListController');

const app = express();
const { SERVER_PORT , CON_STRING, SESSION_SECRET} = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
  secret:SESSION_SECRET,
  resave:false,
  saveUninitialized:false
}))
app.use( express.static( `${__dirname}/../build` ) )


//COMPONENTS
app.get('/api/cpu', comp_crtl.getCpu)
app.get('/api/cpu/:id', list_crtl.getcpu)
app.get('/api/cpu-cooler', comp_crtl.getcpucooler)
app.get('/api/motherboard', comp_crtl.getMotherboard)
app.get('/api/memory', comp_crtl.getMemory)
app.get('/api/internal-storage', comp_crtl.getinternalstorage)
app.get('/api/video-card', comp_crtl.getvideocard)
app.get('/api/comp-case', comp_crtl.getCompCase)
app.get('/api/power-supply', comp_crtl.getpowersupply)
// app.get('/api/case-fan', comp_crtl.getCaseFan)
// app.get('/api/speakers', comp_crtl.get_speakers)
// app.get('/api/external-storage', comp_crtl.get_external_storage)
// app.get('/api/fan-controller', comp_crtl.get_fan_controller)
// app.get('/api/headphones', comp_crtl.get_headphones)
// app.get('/api/keyboard', comp_crtl.get_keyboard)
// app.get('/api/monitor', comp_crtl.get_monitor)
// app.get('/api/mouse', comp_crtl.get_mouse)
// app.get('/api/os', comp_crtl.get_os)
// app.get('/api/optical-drive', comp_crtl.get_optical)
// app.get('/api/software', comp_crtl.get_software)
// app.get('/api/sound-card', comp_crtl.get_sound_card)
// app.get('/api/thermal-compound', comp_crtl.get_thermal_compound)
// app.get('/api/ups', comp_crtl.get_ups)
// app.get('/api/wired-network', comp_crtl.get_wired_network)
// app.get('/api/wireless-network', comp_crtl.get_wireless_network)

//USERS
app.post('/api/register', user_crtl.register)
app.post('/api/login', user_crtl.login)
app.get('/api/logout', user_crtl.logout)




try {
  massive(CON_STRING).then(db=>{
    app.set('db',db);
    console.log('Connected To Database');
  
    app.listen(SERVER_PORT, ()=>{
      console.log(`Server Active on PORT:${SERVER_PORT}`)
    })
  })
  
} catch (error) {
  console.log(error)
}
