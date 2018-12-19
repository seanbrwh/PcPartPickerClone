require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      massive = require('massive'),
      bcrypt = require('bcrypt');
      // user_crtl = require('./controllers/User_controller'),
      // comp_crtl = require('./controllers/Component_controller'),
      // list_crtl = require('./controllers/ListController');

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
app.get('/api/cpu', async (req,res) => {      
  try {
    let db = req.app.get('db');             
    let cpu = await db.cpu.allcpu();
    res.send(cpu)
  } catch (error) {
    console.log(error)
  }
})
app.get('/api/cpu/:id', async (req,res)=>{
  try {
    let db = req.app.get('db')
    let {id} = req.params
    let cpu = await db.cpu.getsinglecpu(id);
    res.send(cpu)
  } catch (error) {
    console.log(error)    
  }
})
app.get('/api/cpu-cooler', async (req,res) => {
  try {
    let db = req.app.get('db')
    let cpucooler = await db.cpucooler.allcpucooler()
    res.status(200).send(cpucooler)
  } catch (error) {
    console.log(error)
  }
})
app.get('/api/cpu-cooler/:id', async (req,res)=>{
  try {
    let db = req.app.get('db')
    let {id} = req.params
    let cpuCooler = await db.cpucooler.singlecpucooler(id)
    res.send(cpuCooler)
  } catch (error) {
    console.log(error)
  }
})
app.get('/api/motherboard',  async (req,res) => {
  try {
    let db = req.app.get('db')
    let motherboard = await db.motherboard.allMotherboard()
    res.status(200).send(motherboard)
  } catch (error) {
    console.log(error)
  }
})
app.get('/api/motherboard/:id', async (req,res)=>{
  try {
    let db = req.app.get('db')
    let {id} = req.params;
    let motherboard = await db.motherboard.singlemotherboard(id)
    res.send(motherboard)
  } catch (error) {
    console.log(error)
  }
})
app.get('/api/memory', async (req,res) => {
  try {
    let db = req.app.get('db')
    let memory = await db.Memory.allmemory()
      res.status(200).send(memory)      
  } catch (error) {
    console.log(error)
  }
})
app.get('/api/memory/:id', async (req,res)=>{
  try {
    let db = req.app.get('db')
    let {id} = req.params
    let memory = await db.Memory.singlemem(id)
    res.send(memory)
  } catch (error) {
    console.log(error)
  }
})
app.get('/api/internal-storage', async (req,res) => {
  try {
    let db = req.app.get('db')
    let internalStorage = await db.intstorage.allintstorage()
    res.status(200).send(internalStorage)
  } catch (error) {
    console.log(error)
  }
})
app.get('/api/internal-storage/:id', async (req,res) =>{
  try {
    let db = req.app.get('db')
    let {id} = req.params;
    let intStorage = await db.intstorage.singlestorage(id)
    res.send(intStorage)
  } catch (error) {
    console.log(error)
  }
})
app.get('/api/video-card', async (req,res) => {
  try {
    let db = req.app.get('db')
    let videoCard = await db.videocard.allvideocard()      
    res.status(200).send(videoCard)
  } catch (error) {
    console.log(error)
  }
})
app.get('/api/video-card/:id', async (req,res) => {
  try {
    let db = req.app.get('db')
    let {id} = req.params;
    let vidcard = await db.videocard.singlevideocard(id)
    res.send(vidcard)
  } catch (error) {
    console.log(error)
  }
})
app.get('/api/comp-case', async (req,res) => {
  try {
    let db = req.app.get('db')
    let compcase = await db.compcase.allcompcase()
    res.status(200).send(compcase)
  } catch (error) {
    console.log(error)
  }
})
app.get('/api/comp-case/:id', async (req,res)=>{
  try {
    let db = req.app.get('db')
    let {id} = req.params;
    let compcase = await db.compcase.singlecase(id)
    res.send(compcase)
  } catch (error) {
    console.log(error)
  }
})
app.get('/api/power-supply', async (req,res) => {
  try {
    let db = req.app.get('db')
    let psu = await db.psu.allpsu()
    res.status(200).send(psu)
  } catch (error) {
    console.log(error)
  }
})
app.get('/api/power-supply/:id', async (req,res)=> {
  try {
    let db = req.app.get('db')
    let {id} = req.params;
    let psu = await db.psu.singlepsu(id)
    res.send(psu)
  } catch (error) {
    console.log(error)
  }
})
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
app.post('/api/register',  async (req,res) => {
  try {
    let db = req.app.get('db')
    let {regUser, regEmail,regPass} = req.body
    const saltRounds = 10
    let userCheck = await db.User.find_user([regUser, regEmail])
    if(userCheck[0]){
      res.status(200).send('User Already Exists')
    }else{
      bcrypt.hash(regPass, saltRounds, async (err, hash)=>{
        let createdUser = await db.User.create_user([regUser,regEmail,hash])
        req.session.user = createdUser[0]
        res.status(200).send(req.session.user)
      })
    }
    
  } catch (error) {
    console.log(error)
  }
})
app.post('/api/login', async (req,res) => {
  try {
    let db = req.app.get('db')
    let {logEmail,logPass} = req.body
    let user = await db.User.find_log_user([logEmail])
    bcrypt.compare(logPass, user[0].password, (err, response)=>{
      if(response == true){
        req.session.user = {user_id:user[0].user_id,username:user[0].username,userEmail:user[0].email}          
        res.status(200).send(req.session.user)
      }else{
        res.send('User Does not exist')
      }
    })
  } catch (error) {
    console.log(error)
  }
})
app.get('/api/logout', async (req,res) => {
  try {
    req.session.destroy()
    res.status(200).send(req.session)
  } catch (error) {
    res.send('Logged Out')
  }
})




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
