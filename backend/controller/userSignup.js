async function userSignup(req,res ){
    try {
        
    } catch (error) {
        res.json({
            message: error,  // Use `error.message` to get the error message string
            error: true,
            success: false
        });
}
}