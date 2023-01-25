let Book = require('../models/book')
let User = require('../models/user')
const dotenv = require('dotenv')//pour charger les variables d'environnement 
dotenv.config({path:'../backend/config/config.env'})
exports.getAllbooks =async (req,res)=>{
const books = await Book.find()
res.status(200).json({
success:true,
count:books.length,
books
})
}
exports.getOneBookByISBN=async (req,res)=>{
    ISBNcode = req.params.isbn
    const book = await Book.findOne({
        ISBNcode:ISBNcode
    })
    res.status(200).json({
    success:true,
    book
    })
    }
exports.getOneBookByAutor=async (req,res)=>{
    autor = req.params.aut
    const book = await Book.find({
        autor:autor
    })
    res.status(200).json({
    success:true,
    book
    })
}
exports.getbookBytitle=async (req,res)=>{
    title = req.params.tit
    const book = await Book.find({
        title:title
    })
    res.status(200).json({
    success:true,
    book
    })
    }
exports.addBook =async (req,res)=>{
    const book = new Book(req.body)
    await book.save()
    res.status(200).json({
    success:true,
    book
    })
    }
exports.updateBook =async (req,res)=>{
    const book =await Book.updateOne({
    _id:req.params.idBook
    },
    {
    $set:req.body
    })
    res.status(200).json({
    success:true,
    book
    })
    }
    exports.deletebook =async (req,res)=>{
        del = await Book.deleteOne({
        _id:req.params.id
        })
        res.status(200).json({
        success:true,
        del
        })
    }        
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
