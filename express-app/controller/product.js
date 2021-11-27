const ProductModel = require('../model/product')

exports.productTypes = (req, res) => {
  ProductModel.aggregate(
    [
      {
        $group: {
          _id: '$product_type'
        }
      }
    ],
    (err, result) => {
      if (err) {
        res.status(400).send({ err: 'Something went wrong!' })
      } else {
        res.send(result)
      }
    }
  )
}
exports.productSearch = (req, res) => {
  let { k, size, pageno, active_product, product_type } = req.query
  if (!size) {
    size = '10'
  }
  if (!pageno) {
    pageno = '1'
  }
  active_product = active_product.split(',').map(el => el === 'true')
  const skip = parseInt(size) * (parseInt(pageno) - 1)
  const limit = parseInt(size)
  ProductModel.aggregate(
    [
      {
        $match: {
          material_name: new RegExp(k),
          maker_product_status: { $in: active_product },
          product_type: { $in: product_type.split(',') }
        }
      },
      {
        $skip: skip
      },
      {
        $limit: limit
      }
    ],
    (err, result) => {
      if (err) {
        res.status(400).send({ err: 'Something went wrong!' + err })
      } else {
        ProductModel.aggregate(
          [
            {
              $match: {
                material_name: new RegExp(k)
              }
            },
            {
              $group: {
                _id: null,
                count: {
                  $sum: 1
                }
              }
            }
          ],
          (cerr, count) => {
            if (cerr) {
              res.status(400).send({ err: 'Something went wrong!' + cerr })
            } else {
              console.log()
              res.send({
                result,
                count: count[0] ? count[0].count : 0,
                total_pages: count[0]
                  ? Math.ceil(count[0].count / parseInt(size))
                  : 0
              })
            }
          }
        )
      }
    }
  )
}
