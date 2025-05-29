import React from 'react'
import { Link } from 'react-router'

export default function Home() {
return (
    <>
        <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 ">
            <div className="text-gray-900 text-4xl font-extrabold mb-6 drop-shadow-lg tracking-tight text-center">
                Welcome to My Application
            </div>
            <Link to={'/login'} className="bg-[#2da44e] hover:bg-[#238636] focus:ring-4 focus:ring-[#2da44e]/30 text-white px-8 py-3 rounded-xl shadow-xl text-xl font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                Get Started
            </Link>
        </section>
    </>
)
}
