const express = require('express')
const app = express()
const connectDB = require('./config/db')
require('dotenv').config()
const port = 8000
connectDB()
app.use(express.json())


app.get('/',(req, res)=>{
    res.send("Server Running Successfully")
})

const patientrouter = require('./routes/patientroute')

app.use('/patient',patientrouter)

app.listen(port,()=>{
    console.log('Server started on port'+port)
})