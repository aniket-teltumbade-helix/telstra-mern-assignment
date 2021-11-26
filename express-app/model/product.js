var mongoose = require('mongoose')

var productSchema = new mongoose.Schema(
  {
    material_name: { type: String, required: true },
    product_type: { type: String, required: true },
    description: { type: String },
    maker_product_status: { type: Boolean, default: false }
  },
  { timestamps: true }
)

var ProductModel = mongoose.model('product', productSchema)

module.exports = ProductModel
