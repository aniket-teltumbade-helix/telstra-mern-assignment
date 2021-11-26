import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useSearch ({ search }) {
  const [data, setdata] = useState()
  useEffect(() => {
    var config = {
      method: 'get',
      url: `http://localhost:8989/products/search?k=${search}`,
      headers: {}
    }

    axios(config)
      .then(function (response) {
        setdata(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  useEffect(() => {
    var config = {
      method: 'get',
      url: `http://localhost:8989/products/search?k=${search}`,
      headers: {}
    }

    axios(config)
      .then(function (response) {
        setdata(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [search])
  return { data }
}
