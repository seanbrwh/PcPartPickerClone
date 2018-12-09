const bcrypt = require('bcrypt')
module.exports = {
  register: async (req,res) => {
    try {
      let db = req.app.get('db')
      let {regUser, regEmail,regPass} = req.body
      const saltRounds = 10
      let userCheck = await db.User.find_user([regUser, regEmail])
      if(userCheck[0]){
        res.status(200).send('User Already Exists')
      }else{
        bcrypt.hash(regPass, saltRounds, async (err, hash)=>{
          let createdUser = await db.User.create_user([regUser,regEmail,hash])
          req.session.user = createdUser[0]
          res.status(200).send(req.session.user)
        })
      }
      
    } catch (error) {
      console.log(error)
    }
  },
  login: async (req,res) => {
    try {
      let db = req.app.get('db')
      let {logEmail,logPass} = req.body
      let user = await db.User.find_log_user([logEmail])
      bcrypt.compare(logPass, user[0].password, (err, response)=>{
        if(response == true){
          req.session.user = {user_id:user[0].user_id,username:user[0].username,userEmail:user[0].email}
          console.log(req.session.user)
          res.status(200).send(req.session.user)
        }else{
          res.send('User Does not exist')
        }
      })
    } catch (error) {
      
    }
  },
  logout: async (req,res) => {
    try {
      req.session.destroy()
      res.status(200).send(req.session)
    } catch (error) {
      console.log(error)
    }
  }
}