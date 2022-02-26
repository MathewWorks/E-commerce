const jwt=require("jsonwebtoken")

// verifying token is valid or not
const authToken=function(req,res,next){
    const token=req.header('auth-token');
    // console.log(token)
    if(!token){
        return res.status(401).json({msg:"No token found, Authoriztion required"});
    }
    try {
        const decoded=jwt.verify(token,"jwtsecretkey");
        req.user=decoded.user;
        next();
    } catch (error) {
        res.status(401).json({msg:"token is not valid"});
    }
}

module.exports=authToken