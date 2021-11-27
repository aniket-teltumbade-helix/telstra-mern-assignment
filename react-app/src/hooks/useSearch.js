import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useSearch (search, size = 10, pageno = 1, status) {
  const [data, setdata] = useState()

  useEffect(() => {
    let active_status = [status.active === true, status.inactive === false]
    console.log(encodeURIComponent(active_status))
    var config = {
      method: 'get',
      url: `http://localhost:8989/products/search?k=${search}&size=${size}&pageno=${pageno}&active_product=${active_status}`,
      headers: {}
    }

    axios(config)
      .then(function (response) {
        setdata(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [search, size, pageno, status])
  return { data }
}
