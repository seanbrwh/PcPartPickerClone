module.exports = {
  get_comp_case: async (req,res) => {
    try {
      let db = req.app.get('db');
      let comp_case = await db.comp_case.all_comp_case();
      res.status(200).send(comp_case);    
    } catch (error) {
      throw error
    }
  },
  get_case_fan: async (req,res) => {
    try {
      let db = req.app.get('db');
      let case_fan = await db.Case_fan.all_case_fan();
      res.status(200).send(case_fan);
    } catch (error) {
      throw error
    }
  },
  get_speakers: async (req,res) => {
    let db = req.app.get('db')

    res.status(200).send()
  },
  get_cpu: async (req,res) => {
    try {
      let db = req.app.get('db');
      let cpu = await db.Cpu.all_cpu();
      res.status(200).send(cpu);   
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
  },
}