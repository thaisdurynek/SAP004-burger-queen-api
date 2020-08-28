import { Router } from 'express'
import ProductController from '../controllers/productController'

const router = Router()
router.get('/', ProductController.all)
router.post('/', ProductController.add)
router.get('/:id', ProductController.getProduct)
router.put('/:id', ProductController.updated)
router.delete('/:id', ProductController.deleted)
export default router