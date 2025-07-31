import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className='flex justify-between bg-indigo-800 text-white py-2'>
        <div className="logo">
          <span className='font-bold text-xl mx-9'>My Task</span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all duration-50 flex items-center gap-1'><IoMdHome />Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-50 flex items-center gap-2'><FaTasks />Your Tasks</li>
            <li></li>
        </ul>
    </nav>
  )
}

export default Navbar
