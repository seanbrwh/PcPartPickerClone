module.exports = {
  getCpu: async (req,res) => {      
      try {
        let db = req.app.get('db');             
        const cpu = await db.cpu.allcpu();
        res.send(cpu)
      } catch (error) {
        console.log(error)
      }
  },
  getcpucooler: async (req,res) => {
    try {
      let db = req.app.get('db')
      const cpucooler = await db.cpucooler.allcpucooler()
      res.status(200).send(cpucooler)
    } catch (error) {
      console.log(error)
    }
  },
  getMotherboard: async (req,res) => {
    try {
      let db = req.app.get('db')
      const motherboard = await db.motherboard.allMotherboard()
      res.status(200).send(motherboard)
    } catch (error) {
      console.log(error)
    }
  },
  getMemory: async (req,res) => {
    try {
      let db = req.app.get('db')
      const memory = await db.Memory.allmemory()
        res.status(200).send(memory)      
    } catch (error) {
      console.log(error)
    }
  },
  getinternalstorage: async (req,res) => {
    try {
      let db = req.app.get('db')
      const internalStorage = await db.intstorage.allintstorage()
      res.status(200).send(internalStorage)
    } catch (error) {
      console.log(error)
    }
  },
  getvideocard: async (req,res) => {
    try {
      let db = req.app.get('db')
      const videoCard = await db.videocard.allvideocard()      
      res.status(200).send(videoCard)
    } catch (error) {
      console.log(error)
    }
  },
  getCompCase: async (req,res) => {
    try {
      let db = req.app.get('db')
      const compcase = await db.compcase.allcompcase()
      res.status(200).send(compcase)
    } catch (error) {
      console.log(error)
    }
  },
  getpowersupply: async (req,res) => {
    try {
      let db = req.app.get('db')
      const psu = await db.psu.allpsu()
      res.status(200).send(psu)
    } catch (error) {
      console.log(error)
    }
  }
}
