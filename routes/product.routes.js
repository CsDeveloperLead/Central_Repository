import Router from 'express'
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from '../controllers/product.controller.js'
import { upload } from '../middleware/multer.middleware.js'

const router = Router()

// to get all products
router.route('/get-all-products').get(getAllProducts)

// to get a single product
router.route('/:id').get(getSingleProduct)

// to create-product, must have images in request
router.route('/create-product').post(upload.fields([
    { name: "Image", maxCount: 1 },
    { name: "Image1", maxCount: 1 },
    { name: "Image2", maxCount: 1 },
    { name: "Image3", maxCount: 1 },
]), createProduct)

// to update details of product
router.route("/update-product/:product_id").put(upload.fields([
    { name: "Image", maxCount: 1 },
    { name: "Image1", maxCount: 1 },
    { name: "Image2", maxCount: 1 },
    { name: "Image3", maxCount: 1 },
]), updateProduct)

// to delete a particular product
router.route("/delete-product/:id").delete(deleteProduct)


export default router