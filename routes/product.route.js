const express = require('express')
const router = express.Router()


const {
    getAllProduct,
    getOneProduct,
    deletedProductByAdmin,
    addProduct,
    updateProduct,
    deleteProduct
} = require('../controller/product.controller')

router.get('/', getAllProduct)
router.get('/admin', deletedProductByAdmin)
router.get('/:id', getOneProduct)
router.post('/', addProduct)
router.patch('/:id', updateProduct)
router.delete('/:id',deleteProduct)



module.exports = router