module.exports = {
  getCompCase: async (req,res) => {
    try {
      let db = req.app.get('db');
      db.compcase.allcompcase().then(response=>{
        res.status(200).send(response);    
      }).catch(err=>{if(err)throw err})
    } catch (error) {
      throw error
    }
  },
  getCaseFan: async (req,res) => {
    try {
      let db = req.app.get('db');
      db.casefan.allcasefan().then(response=>{
        res.status(200).send(response);
      }).catch(err=>{if(err)throw err});
    } catch (error) {
      throw error
    }
  },
  get_speakers: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  getCpu: async (req,res) => {
    try {
      let db = req.app.get('db');
      db.cpu.allcpu().then(response=>{
        res.status(200).send(response);   
      }).catch(err=>{if(err)throw err});
    } catch (error) {
      throw error
    }
  },
  get_cpu_cooler: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_external_storage: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_fan_controller: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_headphones: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_keyboard: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_memory: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_monitor: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_motherboard: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_mouse: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_os: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_optical: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_internal_storage: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_power_supply: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_software: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_sound_card: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_thermal_compound: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_ups: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_video_card: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_wired_network: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_wireless_network: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  }
}