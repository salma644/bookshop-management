const mongoose=require('mongoose')
const bookSchema=mongoose.Schema({
    ISBNcode:{
        type:String,
        required:true,
        trim:true
    },
    title:{
        type:String,
        required:true,
    },
    autor:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    review:
        {
            type:[String]}
    

})
module.exports = mongoose.model('Book',bookSchema)