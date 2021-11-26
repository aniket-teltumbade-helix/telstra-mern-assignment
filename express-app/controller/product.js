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
  let { k, size, pageno } = req.query
  if (!size) {
    size = '10'
  }
  if (!pageno) {
    pageno = '1'
  }
  const skip = parseInt(size) * (parseInt(pageno) - 1)
  const limit = parseInt(size) * parseInt(pageno)
  console.log({ k, size, pageno, limit, skip })
  ProductModel.aggregate(
    [
      {
        $match: {
          material_name: new RegExp(k)
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
        res.send(result)
      }
    }
  )
}
