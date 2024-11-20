require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes')
require('./connection')

const cookpediaServer = express()
cookpediaServer.use(cors())
cookpediaServer.use(router)

PORT = 4000 || process.env.PORT 

cookpediaServer.listen(4000 , ()=>{
    console.log(`cookpedia server running successfully at port number ${PORT}`);
    
})