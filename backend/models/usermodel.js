const mongooes = require('mongoose')
const userSchema =new mongooes.Schema(
    {
      name : String, 
      email : {
        type : String,
        unique : true , 
        required : true , 
      },
      password : String 
    },
    {
        timestamps : true
    } 
)

const userModel = mongooes.model("user",userSchema)

module.exports = userModel 