module.exports = {
  getCpu: async (req,res) => {      
      let db = req.app.get('db');     
      db.allcpu().then(response=>{
        res.status(200).send(response);             
      }).catch(err=>{
        if(err){
          console.log(err)
        }
      });
  }
}
