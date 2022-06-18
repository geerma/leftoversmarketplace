const mongoose = require('mongoose')

require('dotenv').config();

const connectDB = async() =>{
    try {
        const connect=await mongoose.connect(process.env.REACT_APP_MONGO_URI)
        console.log(`MongoDB Connected: ${connect.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports= connectDB