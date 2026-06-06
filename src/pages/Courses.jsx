import React from 'react'
import { useParams } from 'react-router-dom'

const Courses = () => {
    const Param = useParams();
    console.log(Param.id);
    
  return (
     <div className='flex h-full items-center justify-center'>
      <h1 className=' text-5xl underline '>{Param.id}</h1>
    </div>
  )
}

export default Courses
