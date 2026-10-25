
const app = require('./index.js')

const port = process.env.PORT


app.listen(port ,()=>{
    console.log(`server is running in port: ${port}` );
})