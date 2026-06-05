import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './component/Nav.jsx'
import Product from './pages/Product.jsx'
import Footer from './component/Footer.jsx'
import Men from './pages/Men.jsx'
import Women from './pages/Women.jsx'
import Kids from './pages/Kids.jsx'


const App = () => {
  return (
    <div className='flex flex-col h-full justify-center'>
      
      <Nav/>
     
      <main className='flex-1'>
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product' element={<Product/>}>
        <Route path='men' element={<Men/>} />
        <Route path='women' element={<Women/>} />
        <Route path='kid' element={<Kids/>} />
        </Route>

      </Routes>
      </main>

       <Footer/>
      
    </div>
  )
}

export default App
