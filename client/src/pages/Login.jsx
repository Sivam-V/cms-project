import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    function handleSubmit(event) {
        event.preventDefault();
        if(email === 'admin@gmail.com' && password === 'admin') {
            navigate('/dashboard/intro');
            Swal.fire({
                title: 'Login Successful',
                text: 'Welcome to the Dashboard!',
                icon: 'success',
            });
        }
        else {
            Swal.fire({
                title: 'Login Failed',
                text: 'Invalid email or password',
                icon: 'error',
            });
        }
    }

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
            <form className="bg-white p-8 rounded-md shadow border border-gray-200 w-full max-w-sm" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 font-mono tracking-tight">
                    Sign in
                </h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    placeholder="Username or email address"
                    className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md bg-[#f6f8fa] focus:outline-none focus:ring-2 focus:ring-[#2da44e] text-sm"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={(e)=>setPassword(e.target.value)}
                    className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md bg-[#f6f8fa] focus:outline-none focus:ring-2 focus:ring-[#2da44e] text-sm"
                />
                <button
                    type="submit"
                    className="w-full bg-[#2da44e] text-white py-2 rounded-md font-semibold hover:bg-[#218838] transition-colors text-sm"
                >
                    Sign in
                </button>
            </form>
        </div>
  )
}
