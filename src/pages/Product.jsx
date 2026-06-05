import { Link, Outlet } from "react-router-dom"


const Product = () => {
  return (
    
     <div className="flex flex-col h-full">
      <div className="flex gap-4 justify-center p-4">
        <Link to="men">Mens</Link>
        <Link to="women">Women</Link>
        <Link to="kid">Kids</Link>
      </div>

       <div className="flex-1 flex items-center justify-center">
        <Outlet />
      </div>

    </div>
    
  )
}

export default Product
