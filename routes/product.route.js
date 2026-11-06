const express = require('express')
const router = express.Router()


const {
    getAllProduct,
    getOneProduct,
    deletedProductByAdmin,
    addProduct
} = require('../controller/product.controller')

router.get('/', getAllProduct)
router.get('/admin', deletedProductByAdmin)
router.get('/:id', getOneProduct)
router.post('/', addProduct)


module.exports = router