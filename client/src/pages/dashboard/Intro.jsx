import React from 'react'

export default function Intro() {
return (
    <div className="h-screen w-[85vw] p-8 bg-[#0d1117] shadow-md border border-[#30363d]">
            <div className="text-3xl font-bold text-[#c9d1d9] mb-4">
                Welcome to the Dashboard App
            </div>
            <div className="text-lg text-[#8b949e] mb-6">
                This app helps you organize your project notes, track your progress, and visualize important information all in one place.
            </div>
            <ul className="list-disc pl-6 space-y-2 text-[#c9d1d9]">
                <li className="marker:text-[#3fb950]">Add, edit, and manage your notes easily</li>
                <li className="marker:text-[#3fb950]">Track your project progress</li>
                <li className="marker:text-[#3fb950]">Get insights and visual summaries</li>
            </ul>
        </div>
)
}
