const mongoose = require('mongoose')
const connectDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`dp connecting ${connection.connection.name}`);
    } catch (error) {
        console.log(`dp disconnect ${error}`);
        process.exit(1)
    }
}
module.exports = connectDb