import React from 'react'

const Footer = () => {
  return (
      <footer className="w-full text-center text-sm text-gray-500 border-t border-gray-200 py-6 mt-auto bg-yellow-50">
        <p>© {new Date().getFullYear()} Shrtit — Built with care by Sohaib Kundi</p>
      </footer>
  )
}

export default Footer