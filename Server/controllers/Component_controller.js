module.exports = {
  getCpu: async (req,res) => {      
      try {
        let db = req.app.get('db');             
        const cpu = await db.cpu.allcpu();
        res.send(cpu)
      } catch (error) {
        console.log(error)
      }
  },getcpucooler: async (req,res) => {
    try {
      let db = req.app.get('db')
      const cpucooler = await db.cpucooler.allcpucooler()
      res.status(200).send(cpucooler)
    } catch (error) {
      
    }
  }
}
