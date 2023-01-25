const express=require('express')
const router = express.Router()
const{getAllbooks,getOneBookByISBN,getbookBytitle,addBook,updateBook,getOneBookByAutor,verifyUser,deletebook}=require('../controllers/book')

router.route('/books').get(getAllbooks)
router.route('/addbook').post(addBook,verifyUser)
router.route('/upbook/:idBook').patch(updateBook,verifyUser)
router.route('/del/:id').delete(deletebook,verifyUser)
router.route('/book/code/:isbn').get(getOneBookByISBN)
router.route('/book/aut/:aut').get(getOneBookByAutor)
router.route('/book/tit/:tit').get(getbookBytitle)
module.exports=router