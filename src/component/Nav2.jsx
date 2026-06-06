import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Nav2 = () => {
    const navigate = useNavigate('/');
  return (
    <div>
      <nav>
          <div className='flex pl-10 pt-10 gap-13'>
            <button 
            onClick={()=>{
                navigate('/');
            }}
            className='bg-gray-600 rounded-2xl justify-center w-[110px] cursor-pointer active:text-amber-400 '>Return Home</button>

            <button 
            onClick={()=>{
                navigate(-1);
            }}
            className='bg-gray-600 rounded-2xl justify-center w-[110px] cursor-pointer active:text-amber-400'>Back</button>
            
            <button 
            onClick={()=>{
                navigate(+1);
            }}
            className='bg-gray-600 rounded-2xl justify-center w-[110px] cursor-pointer active:text-amber-400'>Next</button>
            
          </div>
        </nav>
    </div>
  )
}

export default Nav2
