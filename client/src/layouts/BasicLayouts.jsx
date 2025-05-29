import React from 'react'
import { Link , Outlet } from 'react-router'
import Login from '../pages/Login'

export default function BasicLayouts() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <header className="bg-black text-white py-4 shadow-md flex flex-col sm:flex-row items-center justify-between px-6">
        <div className="text-2xl font-bold flex items-center gap-2">
          <Link to={'/home'} role="img" aria-label="Notes">📝</Link> Notes
        </div>
        <div className="flex gap-4">
          <Link to={'/login'} className="px-4 py-2 rounded hover:bg-gray-900 transition border border-white text-white bg-black">Sign In</Link>
          <Link to={'/signup'} className="px-4 py-2 rounded hover:bg-white hover:text-black transition border border-white text-white bg-black">Sign Up</Link>
        </div>
      </header>
      <main className="flex-1 overflow-hidden">
        <Outlet/>
      </main>
      <footer className="bg-gray-100 text-gray-600 text-center py-3 shadow-inner w-full border-t">
        © {new Date().getFullYear()} Notes App. All rights reserved.
      </footer>
    </div>
  )
}
