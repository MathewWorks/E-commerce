const userModal = require("../model/user");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const login = async (req, res) => {
    try {
        const password=req.body.password
        // finding email present in collection or not 
        const userlogin=await userModal.findOne({email:req.body.email});
        if(!userlogin){
            return res.status(400).send("invalid email or password");
        }
        // compare user enter password with password stored in db.
        const isMatch=await bcrypt.compare(password,userlogin.password);

        if(!isMatch){
            return res.status(400).send("invalid email or password")
        }

        const payload={
            user:{
                id:userlogin.id
            }
        }
        
        // generating jwttoken on login
        jwt.sign(payload,"jwtsecretkey",
            {expiresIn:"1d"},(err,token)=>{
                if(err) throw err;
                res.json({msg:`successfully login ${userlogin.first_name}`,token})
            }
        )
    } catch (error) {
        console.log(error);
    }
};


const logout=async(req,res)=>{
    try {
        const token=req.header('auth-token');
        // for logout i change the expire time to 1 sec expires in 1s
        const logout=await jwt.sign({token},"jwtsecretkey", { expiresIn: 1})
        if (logout){
            res.status(200).send({msg : 'You have been Logged Out' });
        }
        else{
            res.send({msg:"something went wrong"})
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).send("server error") ;
    }

}
module.exports= {
    login,
    logout
};