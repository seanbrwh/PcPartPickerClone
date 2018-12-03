module.exports = {
  getCpu: async (req,res) => {      
      try {
        let db = req.app.get('db');     
        db.allcpu.then(response=>{
          res.status(200).send(response);             
        }).catch(err=>{
          if(err){
            console.log(err)
          }
        });    
      } catch (error) {
        console.log(error)
      }
  }
}
