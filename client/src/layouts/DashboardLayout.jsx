import React from 'react'
import { Outlet } from 'react-router'

export default function DashboardLayout() {
return (
    <>
        <aside className="min-h-screen w-56 bg-[#161b22] shadow-xl flex flex-col py-10 px-6">
            <div className="text-3xl font-extrabold mb-12 text-center text-[#2ea043] tracking-wide">
                Dashboard
            </div>
            <nav className="flex flex-col gap-3 flex-1">
                <a href="#" className="text-lg font-semibold text-[#c9d1d9] hover:bg-[#238636]/20 hover:text-[#2ea043] rounded px-3 py-2 transition">
                    Intro
                </a>
                <a href="#" className="text-lg font-semibold text-[#c9d1d9] hover:bg-[#238636]/20 hover:text-[#2ea043] rounded px-3 py-2 transition">
                    Counter
                </a>
                <a href="#" className="text-lg font-semibold text-[#c9d1d9] hover:bg-[#238636]/20 hover:text-[#2ea043] rounded px-3 py-2 transition">
                    Stop Watch
                </a>
                <a href="#" className="text-lg font-semibold text-[#c9d1d9] hover:bg-[#238636]/20 hover:text-[#2ea043] rounded px-3 py-2 transition">
                    Calculator
                </a>
                <a href="#" className="text-lg font-semibold text-[#c9d1d9] hover:bg-[#238636]/20 hover:text-[#2ea043] rounded px-3 py-2 transition">
                    Todo list
                </a>
                <a href="#" className="text-lg font-semibold text-[#c9d1d9] hover:bg-[#238636]/20 hover:text-[#2ea043] rounded px-3 py-2 transition">
                    Profile
                </a>
            </nav>
            <button className="mt-12 px-4 py-2 bg-[#238636] text-white font-semibold rounded shadow hover:bg-[#2ea043] transition">
                Logout
            </button>
        </aside>
        <main>
            <Outlet/>
        </main>
    </>
)
}
