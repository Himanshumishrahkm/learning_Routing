import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './component/Nav.jsx'
import Product from './pages/Product.jsx'
import Footer from './component/Footer.jsx'


const App = () => {
  return (
    <div className='flex flex-col h-screen'>
      
      <Nav/>
     
      <main className='flex-1'>
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product' element={<Product/>}/>

      </Routes>
      </main>

       <Footer/>
      
    </div>
  )
}

export default App
