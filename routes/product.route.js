const express = require('express')
const router = express.Router()


const {
    getAllProduct,
    getOneProduct,
    deletedProductsByAdmin,
    addProduct,
    updateProduct,
    deleteProduct,
    restoreProduct,
    getDeletedProduct
} = require('../controller/product.controller')

router.get('/', getAllProduct)
router.get('/admin', deletedProductsByAdmin)
router.get('/deleted',getDeletedProduct)
router.post('/', addProduct)
router.get('/:id', getOneProduct)
router.patch('/:id', updateProduct)
router.patch('/:id/restore',restoreProduct)
router.delete('/:id',deleteProduct)



module.exports = router