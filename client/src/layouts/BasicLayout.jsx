import React from 'react'

export default function BasicLayout() {
return (
    <div>
        <header className="flex items-center justify-between px-8 py-4 bg-black text-white shadow">
            <div className="text-2xl font-bold flex items-center gap-2">
                <span role="img" aria-label="Notes">📝</span> Notes
            </div>
            <div className="flex gap-4">
                <button className="px-4 py-2 rounded hover:bg-gray-900 transition border border-white text-white bg-black">Sign In</button>
                <button className="px-4 py-2 rounded hover:bg-white hover:text-black transition border border-white text-white bg-black">Sign Up</button>
            </div>
        </header>
    </div>
)
}
