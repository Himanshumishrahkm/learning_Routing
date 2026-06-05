import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className='pl-10 pr-10 pt-6 pb-6 flex flex-row justify-between bg-blue-200'>
         <div className='text-black tracking-wider font-extrabold '>Himanshu</div>
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
