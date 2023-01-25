//ce code cree un serveur qui ecoute 
// les reqs GET sur la route '/' et revoie "hello world"

const express = require('express') //importer la biblio Express
const app = express() // creaction instance de l'aplication

app.get('/',(req,res)=>{ //definir une route pour les reqs GET
    res.send('<h2>Hello World</h2>')
}

)

//------------API----
app.use(express.json())
const books=require('./routes/book')
const auth =require('./routes/authen')
app.use('/api/v1',books,auth)
module.exports=app //app est exporté pour quel etre utilisable dans d'autre fichers de l'application