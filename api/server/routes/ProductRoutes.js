import { Router } from 'express'
import ProductController from '../controllers/productController'

const router = Router()
router.get('/', ProductController.getAllProducts)
router.post('/', ProductController.add)
router.get('/:id', ProductController.getAllProducts)
router.put('/:id', ProductController.getAllProducts)
router.delete('/:id', ProductController.getAllProducts)
export default router