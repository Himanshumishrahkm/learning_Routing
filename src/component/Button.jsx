import { useContext, useState } from 'react'
import { userName } from '../context/Context'

const Button = () => {
    const {theme,setTheme} = useContext(userName);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };


  return (
    <>
    <div className='flex flex-row justify-center' >
      <button className='p-0.5 bg-red-400 rounded-2xl flex justify-center' onClick={()=>{
        toggleTheme();
      }}>
        {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      </div>
    </>
  )
}

export default Button
