const mongoose = require("mongoose")


async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://AzizUr:tQARR96s73VqC4r6@nestech.ygoo0.mongodb.net/NESTECH?retryWrites=true&w=majority&appName=NESTECH')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB