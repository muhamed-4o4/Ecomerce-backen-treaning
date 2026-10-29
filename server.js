
const app = require('./index.js')
const connectDp =require('./config/connectDb.js')

const port = process.env.PORT
async function startServer() {

    await connectDp()
    app.listen(port, () => {
        console.log(`server is running in port: ${port}`);
    })
}
startServer()