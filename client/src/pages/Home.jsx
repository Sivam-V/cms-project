import React from 'react'

export default function Home() {
return (
    <>
        <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
            <div className="text-gray-900 text-4xl font-extrabold mb-6 drop-shadow-lg tracking-tight text-center">
                Welcome to My Application
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 text-white px-8 py-3 rounded-xl shadow-xl text-xl font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                Get Started On
            </button>
        </section>
    </>
)
}
