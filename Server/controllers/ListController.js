module.exports = {
  getcpu: async (req,res) => {
    try {
      let db = req.app.get('db')
      console.log(req.params.id)
      let { id } = req.params
      let singleCpu = await db.cpu.getsinglecpu([id])
      console.log(singleCpu)
      res.status(200).send(singleCpu)
    } catch (error) {
      console.log(error)
    }
  }
}