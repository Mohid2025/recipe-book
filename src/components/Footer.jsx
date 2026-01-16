import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="w-full py-4 bg-black">
  <div className="flex flex-col items-center justify-center gap-4 text-center">
    
    <div className="flex gap-6 text-sm font-medium text-white">
      <a href="#" className="hover:text-gray-500 transition">Home</a>
      <a href="#" className="hover:text-gray-500 transition">Menu</a>
      <a href="#" className="hover:text-gray-500 transition">Contact</a>
    </div>

    <p className="text-xs text-gray-400">
      © 2026 My Recipie Book. All rights reserved.
    </p>
  </div>
</footer>

    </>
  )
}

export default Footer
