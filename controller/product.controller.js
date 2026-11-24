const Product = require('../models/product.models')
const catchAsync = require('../utils/catchAsync.utils')


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
    if (!product) {
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
const deletedProductsByAdmin = catchAsync(async (req, res, next) => {
    const product = await Product.find(
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
    res.status(201).json({
        success: true,
        message: "product add successfully",
        data: product
    })
})
// update product

const updateProduct = catchAsync(async (req, res, next) => {

    // Model.findOneAndUpdate(filter, update, options)
    const product = await Product.findOneAndUpdate(

        { _id: req.params.id, isDeleted: false }, // filter => condition find product
        { ...req.body, updatedAt: new Date() }, // what data do I wont to edit
        { new: true, runValidators: true })  // return update product
    if (!product) {
        return res.status(404).json({
            success: false,
            message: "product not found  and not updated"
        })
    }
    res.status(200).json({ success: true, data: product })
})
// delate product
const deleteProduct = catchAsync(async (req, res, next) => {

    //findOneAndUpdate(filter, update, options)

    const product = await Product.findOneAndUpdate(
        { _id: req.params.id, isDeleted: false }, // find product

        // I am changing the value of 'isDeleted' here to implement a soft delete.
        { isDeleted: true, }, { new: true })

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

// Restore Product
const restoreProduct = catchAsync(async (req, res, next) => {
    const product = await Product.findOneAndUpdate(
        { _id: req.params.id, isDeleted: true },
        { isDeleted: false }, { new: true })
    if (!product) {
        return res.status(404).json({
            success: false,
            message: "product not found or not deleted"
        })
    }
    res.status(200).json({
        success: true,
        message: "Product restored successfully",
        data: product
    })
})

// get deleted product 

const getDeletedProduct = catchAsync(async (req, res, next) => {
    const products = await Product.find({ isDeleted: true })
    if (products.length == 0) {
        return res.status(200).json(
            {
                success: true,
                message: "product not found "
            })
    }

    res.status(200).json({
        success: true,
        data: products
    })
})



module.exports = {
    getAllProduct,
    getOneProduct,
    deletedProductsByAdmin,
    addProduct,
    updateProduct,
    deleteProduct,
    restoreProduct,
    getDeletedProduct
}

