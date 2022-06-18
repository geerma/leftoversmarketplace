const mongoose = require('mongoose')
const connectDB = async() =>{
    try {
        const connect=await mongoose.connect('mongodb+srv://GeliYang:z49jj5sfCLpuHy8D@leftovermarketplaceteam.ad7og55.mongodb.net/leftoverdb?retryWrites=true&w=majority')
        console.log(`MongoDB Connected: ${connect.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports= connectDB