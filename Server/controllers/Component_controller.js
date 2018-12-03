module.exports = {
  getCpu: async (req,res) => {    
      let db = req.app.get('db')
      let cpu = await db.cpu.all_cpu()
      res.status(200).send(cpu)        
  }
}
