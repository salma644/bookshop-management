let User = require('../models/user')
const  bcrypt  = require ('bcryptjs') ; 
const jwt = require('jsonwebtoken');
const dotenv=require('dotenv')
dotenv.config({path:'./backend/config/config.env'})

exports.register =async (req,res) => {
    try {
      //cryptage password
      const  salt  = bcrypt.genSaltSync ( 10 ) ; 
      const  hash  = bcrypt.hashSync ( req.body.password, salt );

       const user = new User({
          username: req.body.username,
          email: req.body.email,
          password: hash,
       });
       await user.save();
       
       res.status(200).json({success:true,message:"User created", data: user });
 
    } catch (err) {
       res.status(400).json({success: false, message:err.message});
    }
 };

 exports.login =async (req,res) => {
   try {
     //trouver username
      const user= await User.findOne({username:req.body.username})
      //username not found
      if(!user) res.status(404).json({success: false, message:"User not found!"});
      //username found ,compare password
      const isPassword= await bcrypt.compare(req.body.password,user.password);
     //password incorrect
     if(!isPassword) res.status(400).json({success: false, message:"Wrong password!"});
     //password correct
     const token=jwt.sign({ id: user._id}, process.env.JWT);

      res.cookie("access_token",token,{
         httpOnly:true,
      }).status(200).json({success:true, message:"**User Welcome**", data: user });
 
   } catch (err) {
      res.status(400).json({success: false, message:err.message});
   }
};
                       