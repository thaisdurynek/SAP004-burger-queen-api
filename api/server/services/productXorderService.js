import database from '../src/models'

class Products_orderService {
  static async findByOrderId(orderId) {
    try {
      return await database.Products_order.findAll({where:{orderId}})
    } catch (error) {
      throw error
    }
  }
  static async add(orderId, newProducts_order) {
  try {
    return await database.Products_order.create({...newProducts_order, orderId})
  } catch (error) {
    throw error
  }
}

}
export default Products_orderService