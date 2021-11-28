var mongoose = require('mongoose')

var productSchema = new mongoose.Schema(
  {
    material_name: { type: String, required: true },
    product_type: { type: String, required: true },
    description: { type: String },
    maker_product_status: { type: Boolean, default: false }
  },
  { timestamps: true, autoIndex: true }
)
productSchema.index({
  material_name: 'text',
  product_type: 'text',
  description: 'text'
})
var ProductModel = mongoose.model('product', productSchema)
// ProductModel.createIndexes()
//   .then(res => console.log(res))
//   .catch(err => console.error(err))
module.exports = ProductModel
