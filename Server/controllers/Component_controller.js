module.exports = {
  getCpu: async (req,res) => {      
      try {
        let db = req.app.get('DB');     
        const cpu = await db.allcpu()
          res.status(200).send(cpu);                           
      } catch (error) {
        console.log(error)
      }
  }
}
