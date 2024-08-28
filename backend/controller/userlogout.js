

async function userLogout(req ,res){
   try {
     res.clearCookies("token")


res.json( {
    message : "logout successfully ",
    error : false , 
    success : true , 
    data : [],

}
)

   } catch (error) {
    console.error("Error during signin:", error.message);

    res.json({
        message: error.message,
        error: true,
        success: false,
    });
   }
}

module.exports =  userLogout 