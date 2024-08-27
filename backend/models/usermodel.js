const mongooes = require('mongoose')
const userSchema =new mongooes.Schema(
    {
      name : String, 
      email : {
        type : String,
        unique : true , 
        required : true , 
      },
      password : string 
    },
    {timestamps : true
    } 
)