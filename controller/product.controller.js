const express = require('express')
const Product = require('../models/product.models')

const getAllProduct = async (req, res, next) => {
    const products = await Product.find({ isDeleted: false })
    res.status(200).json({
        success: true,
        message: products
    })
}

module.exports = {
    getAllProduct
}