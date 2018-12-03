module.exports = {
  getCpu: async (req,res) => {      
      let db = req.app.get('db');      
      let cpu = await db.cpu.allcpu();
      res.status(200).send(cpu);        
  }
}
