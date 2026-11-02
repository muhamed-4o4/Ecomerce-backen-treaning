const Product = require('../models/product.models')

// get All Product

const getAllProduct = async (req, res, next) => {
    const products = await Product.find({ isDeleted: false })

    if (!products) {
        return res.status(404).json({
            success: false,
            message: "product not found"
        })
    }

    res.status(200).json({
        success: true,
        message: products
    })
}




module.exports = {
    getAllProduct
}