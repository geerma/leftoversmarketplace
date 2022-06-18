const express = require('express')
const colors = require('colors')
const cors = require('cors')
const connectDB= require('./config/db')

require('dotenv').config()

connectDB()
const app = express()



const port = process.env.PORT||8090

app.use(cors())
app.use(express.json())

app.use('/api',require('./routes/routes'))



app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})
