import React from 'react'
import { Link, Outlet, useLocation } from 'react-router'

const PATHS = [
    {path : '/dashboard/intro', text : 'Intro'},
    {path : '/dashboard/counter', text : 'Counter'},
    {path : '/dashboard/stopwatch', text :'Stop Watch'},
    {path : '/dashboard/calculator', text : 'Calculator'},
    {path : '/dashboard/todo-list', text : 'Todo List'},
    {path : '/dashboard/profile', text : 'Profile'},
]
const STYLE ={
    active : {
        color: '#2ea043',
    }
}
export default function DashboardLayout() {
    const location = useLocation();
    return (
        <div className="flex">
            <aside className="min-h-screen w-56 bg-[#161b22] shadow-xl flex flex-col py-10 px-6">
                <div className="text-3xl font-extrabold mb-12 text-center text-[#2ea043] tracking-wide">
                    Dashboard
                </div>
                <nav className="flex flex-col gap-3 flex-1">
                    {
                        PATHS.map((value,index)=>{
                        return (
                            <Link
                                key={index}
                                to={value.path}
                                className="px-4 py-2 rounded text-[#c9d1d9] hover:bg-[#21262d] hover:text-[#2ea043] transition font-medium"
                                style={location.pathname === value.path ? STYLE.active : {}}
                            >
                                {value.text}
                            </Link>
                        )
                        })
                    }
                </nav>
                <button className="mt-12 px-4 py-2 bg-[#238636] text-white font-semibold rounded shadow hover:bg-[#2ea043] transition">
                    Logout
                </button>
            </aside>
            <main className="flex-1">
                <Outlet/>
            </main>
        </div>
    )
}
