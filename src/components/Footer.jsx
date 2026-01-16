import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex gap-6 text-sm font-medium text-white">
          <Link to="/" className="hover:text-gray-500 transition">
            Home
          </Link>
          <Link to="/recipes" className="hover:text-gray-500 transition">
            Menu
          </Link>
          <Link to="/about" className="hover:text-gray-500 transition">
            Contact
          </Link>
        </div>

        <p className="text-xs text-gray-400">
          © 2026 My Recipe Book. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
