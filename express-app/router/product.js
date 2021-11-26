const { productTypes, productSearch } = require('../controller/product')

var productRouter = require('express').Router()

productRouter.get('/', productTypes)
productRouter.get('/search', productSearch)

module.exports = productRouter
