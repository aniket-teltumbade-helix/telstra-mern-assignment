import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useSearch (
  search,
  size = 10,
  pageno = 1,
  status,
  product_type,
  types,
  sortSelected
) {
  const [data, setdata] = useState()

  useEffect(() => {
    let active_status = [status.active === true, status.inactive === false]
    let sorting = {
      default: { sortField: 'material_name', order: 1 },
      'Material Name A-Z': { sortField: 'material_name', order: 1 },
      'Material Name Z-A': { sortField: 'material_name', order: -1 },
      'Product Type A-Z': { sortField: 'product_type', order: 1 },
      'Product Type Z-A': { sortField: 'product_type', order: -1 }
    }
    var config = {
      method: 'get',
      url: `http://localhost:8989/products/search?k=${search}&size=${size}&pageno=${pageno}&active_product=${active_status}&product_type=${
        product_type.length > 0
          ? product_type
          : types
          ? types.map(el => el._id)
          : []
      }${
        sortSelected === ''
          ? `&sortField=${sorting['default'].sortField}&order=1`
          : `&sortField=${sorting[sortSelected].sortField}&order=${sorting[sortSelected].order}`
      }`,
      headers: {}
    }

    axios(config)
      .then(function (response) {
        setdata(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [search, size, pageno, status, product_type, types, sortSelected])
  return { data }
}
