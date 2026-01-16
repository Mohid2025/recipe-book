import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md p-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl text-white font-bold">My Recipe Book</div>
        <div className="md:hidden">
          <button id="menu-btn" className="focus:outline-none">
            ☰
          </button>
        </div>
        <ul id="menu" className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="font-bold text-white hover:text-gray-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-bold text-white hover:text-gray-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/recipes" className="font-bold text-white hover:text-gray-500">
              Recipies
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
