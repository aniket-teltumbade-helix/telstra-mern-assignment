import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useProductTypes () {
  const [state, setstate] = useState()
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://localhost:8989/products',
      headers: {}
    }

    axios(config)
      .then(function (response) {
        setstate(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  return state
}
