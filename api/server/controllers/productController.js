import Util from './utils'
import ProductService from '../services/productService'

const util = new Util()

class ProductsController {
  static async getAllProducts(req, res) {
    const products = await ProductService.all()
    util.setSuccess(200, 'Products retrieved', products)
    return util.send(res)
  }

  static async add(req, res) {
    if (!req.body.name || !req.body.price) {
      util.setError(400, 'Please complete details')
      return util.send(res)
    }
    const newProduct = req.body
    try {
      const createdProduct = await ProductService.add(newProduct)
      util.setSuccess(201, 'Product Added!', createdProduct)
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }
}

export default ProductsController;