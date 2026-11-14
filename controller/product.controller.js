const Product = require('../models/product.models')
const catchAsync = require('../utils/catchAsync.utils')

// get All Product

const getAllProduct = catchAsync(async (req, res, next) => {
    const products = await Product.find({ isDeleted: false })

    if (products.length === 0) {
        return res.status(200).json({
            success: true,
            data: [],
            message: "product not found"
        })
    }

    res.status(200).json({
        success: true,
        message: products
    })
})

// get one product

const getOneProduct = catchAsync(async (req, res, next) => {
    const product = await Product.findOne(  // findOne return null
        { _id: req.params.id, isDeleted: false })
    if (!products) {
        return res.status(404).json({
            success: false,
            message: `product not found ${req.params.id}`
        })
    }
    res.status(200).json({
        success: true,
        data: product
    })
})

// check product deleted by admin
const deletedProductByAdmin = catchAsync(async (req, res, next) => {
    const product = await Product.findOne(
        { isDeleted: true }).
        select("+isDeleted") // sho product is deleted true by select
    res.status(200).json({
        success: true,
        data: product
    })
})
// add product

const addProduct = catchAsync(async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(200).json({
        success: true,
        message: "product add successfully",
        data: product
    })
})
// update product

const updateProduct = catchAsync(async (req, res, next) => {
    const product = await Product.findOneAndUpdate(
        { _id: req.params.id, isDeleted: false }, //condition find product
        { ...req.body, updatedAt: new Date() }, // what data do I wont to edit
        { new: true, runValidators: true })  // return update product
    if (!product) {
        return res.status(404).json({
            success: false,
            message: "product not found  and not updated"
        })
    }
    res.status(200).json({ success: true, message: product })
})
// delate product
const deleteProduct = catchAsync(async (req, res, next) => {
    const product = await Product.findOneAndUpdate(
        { _id: req.params.id, isDeleted: false }, // find product

        // I am changing the value of 'isDeleted' here to implement a soft delete.
        { isDeleted: true })

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found or already deleted"
        });
    }

    res.status(200).json({
        success: true,
        message: "Product deleted successfully",
        data: product
    });
})





module.exports = {
    getAllProduct,
    getOneProduct,
    deletedProductByAdmin,
    addProduct,
    updateProduct,
    deleteProduct
}