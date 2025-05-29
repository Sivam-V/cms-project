import React from 'react'

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f8fa]">
        <form className="bg-white p-8 rounded-md shadow border border-gray-200 w-full max-w-sm">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 font-mono tracking-tight">
                Sign up
            </h2>
            <input
                type="text"
                placeholder="Username or email address"
                className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md bg-[#f6f8fa] focus:outline-none focus:ring-2 focus:ring-[#2da44e] text-sm"
            />
            <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md bg-[#f6f8fa] focus:outline-none focus:ring-2 focus:ring-[#2da44e] text-sm"
            />
            <button
                type="submit"
                className="w-full bg-[#2da44e] text-white py-2 rounded-md font-semibold hover:bg-[#218838] transition-colors text-sm"
            >
                Sign up
            </button>
        </form>
    </div>
  )
}
