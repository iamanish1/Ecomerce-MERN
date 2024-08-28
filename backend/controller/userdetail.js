async  function userdetail(){
    try {
        
    } catch (error) {
        resizeBy.status(400).json({
            message : error.message || error, 
            error : true , 
            succcess : false , 

        })
    }
}