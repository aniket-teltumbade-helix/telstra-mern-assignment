import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useSearch (search, size = 10, pageno = 1) {
  const [data, setdata] = useState()

  useEffect(() => {
    var config = {
      method: 'get',
      url: `http://localhost:8989/products/search?k=${search}&size=${size}&pageno=${pageno}`,
      headers: {}
    }

    axios(config)
      .then(function (response) {
        setdata(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [search, size, pageno])
  return { data }
}
