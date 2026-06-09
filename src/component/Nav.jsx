import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userName } from '../context/Context'

const Nav = (props) => {
  const {user} = useContext(userName);
  const {theme,setTheme} = useContext(userName);
  
  
  
  return (
    <div>
      <nav className={`pl-10 pr-10 pt-6 pb-6 flex flex-row justify-between ${theme == 'light' ? 'bg-blue-200' : 'bg-blue-600'}`}>
         <div className='text-black tracking-wider font-extrabold '>{user}</div>
         <div className='text-black font-medium flex flex-row gap-6'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/product'>Product</Link>
          </div>
        </nav>
    </div>
  )
}

export default Nav
