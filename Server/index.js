require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      massive = require('massive'),
      comp_crtl = require('./controllers/Component_controller')

const {SERVER_PORT, CON_STRING} = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
  secret:'12p09s9s9df91',
  resave:false,
  saveUninitialized:false
}))


app.get('/api/comp-case', comp_crtl.get_comp_case)
app.get('/api/case-fan', comp_crtl.get_case_fan)
app.get('/api/speakers', comp_crtl.get_speakers)
app.get('/api/cpu', comp_crtl.get_cpu)
app.get('/api/cpu-cooler', comp_crtl.get_cpu_cooler)
app.get('/api/external-storage', comp_crtl.get_external_storage)
app.get('/api/fan-controller', comp_crtl.get_fan_controller)
app.get('/api/headphones', comp_crtl.get_headphones)
app.get('/api/keyboard', comp_crtl.get_keyboard)
app.get('/api/memory', comp_crtl.get_memory)
app.get('/api/monitor', comp_crtl.get_monitor)
app.get('/api/motherboard', comp_crtl.get_motherboard)
app.get('/api/mouse', comp_crtl.get_mouse)
app.get('/api/os', comp_crtl.get_os)
app.get('/api/optical-drive', comp_crtl.get_optical)
app.get('/api/internal-storage', comp_crtl.get_internal_storage)
app.get('/api/power-supply', comp_crtl.get_power_supply)
app.get('/api/software', comp_crtl.get_software)
app.get('/api/sound-card', comp_crtl.get_sound_card)
app.get('/api/thermal-compound', comp_crtl.get_thermal_compound)
app.get('/api/ups', comp_crtl.get_ups)
app.get('/api/video-card', comp_crtl.get_video_card)
app.get('/api/wired-network', comp_crtl.get_wired_network)
app.get('/api/wireless-network', comp_crtl.get_wireless_network)

massive(CON_STRING).then(db=>{
  app.set('db',db);
  console.log('Connected To Database');

  app.listen(SERVER_PORT, ()=>{
    console.log(`Server Active on PORT:${SERVER_PORT}`)
  })
})