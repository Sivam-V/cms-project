import React from 'react'

export default function Notfound() {
return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-xl rounded-lg p-10 flex flex-col items-center">
            <h1 className="text-7xl font-bold text-black mb-4">404</h1>
            <p className="text-2xl font-semibold mb-2 text-black">Page Not found</p>
            <p className="text-gray-700 mb-6 text-center max-w-md">
                Sorry, the page you are looking for does not exist or has been removed.
            </p>
            <button
                className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                onClick={() => window.location.href = '/'}
            >
                Go Home
            </button>
        </div>
    </div>
)
}
