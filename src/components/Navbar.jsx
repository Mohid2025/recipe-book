import React from 'react'

const Navbar = () => {
  return (
    <>
       <nav className="bg-black shadow-md p-3 ">
  <div className="container mx-auto flex items-center justify-between">
    <div className="text-xl text-white font-bold">My Recipe Book</div>
    <div className="md:hidden">
      <button id="menu-btn" className="focus:outline-none">
        ☰
      </button>
    </div>
    <ul id="menu" className="hidden md:flex space-x-6">
      <li><a href="#" className="font-bold text-white hover:text-gray-500">Home</a></li>
      <li><a href="#" className="font-bold text-white hover:text-gray-500">About</a></li>
      <li><a href="#" className="font-bold text-white hover:text-gray-500">Recipies</a></li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar
