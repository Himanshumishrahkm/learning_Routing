import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './component/Nav.jsx'
import Product from './pages/Product.jsx'


const App = () => {
  return (
    <div className='flex flex-col'>
      
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product' element={<Product/>}/>

      </Routes>
    </div>
  )
}

export default App
