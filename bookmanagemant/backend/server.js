const app = require('./app')
const mongoose =require('mongoose')//pour se connecter a la bd
const dotenv = require('dotenv')//pour charger les variables d'environnement 
dotenv.config({path:'config/config.env'})//a partir de config.env
PORT=process.env.PORT// le port sur lequel l'app ecoute les reqs entrantes

//se connecter a la base de donnes
DB=process.env.db_conn
mongoose.connect(DB,()=>console.log("database connected")) //utilise mongoose pour se connecter a la bd definie dan DB
app.listen(PORT,()=>console.log((`Server is running on ${PORT}`))) //permet a l'app d'ecouter les requete entrante sur le port PORT