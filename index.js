const express = require('express')
const app = express()
const hostname = '0.0.0.0'
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
require('dotenv').config()
const port = 8000
connectDB()
const patientrouter = require('./routes/patientroute')
const itemrouter = require('./routes/itemsroute')
const filerouter = require('./routes/fileroute')
app.use(express.json())
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.get('/',(req, res)=>{
    res.send("Server Running Successfully")
})
app.use('/file',filerouter)
app.use('/patient',patientrouter)
app.use('/meditem',itemrouter)
app.listen(port,()=>{
    console.log('Server started on port '+port)
})