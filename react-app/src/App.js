import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './pages/ProductList'
import SearchPage from './pages/SearchPage'

function App () {
  return (
    <Router>
      <div className='mx-12'>
        <NavBar />
        <Routes>
          <Route path='/search/:search' element={<SearchPage />}>
            <Route path='s/:size' element={<SearchPage />}>
              <Route path='p/:pageno' element={<SearchPage />}></Route>
            </Route>
            <Route path='p/:pageno' element={<SearchPage />}>
              <Route path='s/:size' element={<SearchPage />}></Route>
            </Route>
          </Route>
          <Route path='/' element={<ProductList />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
