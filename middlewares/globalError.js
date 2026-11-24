
const appError = require('../utils/appError.utils')
// انا هنا بهندل  الرد بتاع السيرفر لو في مشكله في اي حاجه  وبثبتها لا اي حاجه اي مكان هستدعي فيه ال  الفانكشن دي  

const globalError = (err, req, res, next) => {
    let error = err
    console.log(error);

    //ReferenceError 

    res.status(error.status || 500).json({
        success: false,
        message: error.message || "internal server Error"
    })
}
module.exports = globalError
