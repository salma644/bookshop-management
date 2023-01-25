let User = require('../models/user')

//***Verify Token***
const jwt = require('jsonwebtoken');
exports.verifyToken = (req, res, next)=>{
    const token=req.cookies.access_token;
    //si n'est pas encore authentifié
    if(!token){
        res.status(401).json({success: false, message:"You are not authenticated!"});
    }

    //verifier token
    jwt.verify(token, process.env.JWT, (err,user)=>{
     if(err) res.status(403).json({success: false, message:"Token is not valid!"});
     
     //sinon, user passer en paramètre
     req.user=user; 
     
     next()
     res.send("hello user,you're logged in")
    }
    
    
    
    );
};
//******************** */






//***Verify User***

exports.verifyUser = (req, res, next)=>{
    
    this.verifyToken(req,res,next,()=>{
      if(req.user.id===req.params.id){
         next();
         res.send("hello user,you're logged")        
         
        }else{
         res.status(403).json({success: false, message:"You're not authorized!"})
      }
    });
   
};
//******************** */

//***Verify Admin***


//******************** */


