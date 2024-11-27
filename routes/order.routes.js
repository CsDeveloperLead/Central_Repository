import Router from 'express'
import { createOrder, findOrder, getOrderHistory, getTransactionStatus } from '../controllers/order.controller.js'

const router = Router()

// POST: Create new order
router.route('/create-order').post(createOrder)

// GET: Get order history for a user
router.route('/get-order-history').get(getOrderHistory)

// GET: Find order of a particular transaction
router.route('/find-order/:transactionId').get(findOrder)

// GET: Get Status of 
router.route('/status').get(getTransactionStatus)


export default router