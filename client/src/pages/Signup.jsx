import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

export default function Signup() {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    function handleSubmit(event) {
        event.preventDefault();
        let db = localStorage.getItem('db');
        if(db===null){
            db={
                users: [{email, password}],
            }
            localStorage.setItem('db',JSON.stringify(db))
            Swal.fire({
                title: 'Signup Successful',
                text: 'You can now login with your credentials',
                icon: 'success',
            })
            navigate('/login');
        }
        else{
            db=JSON.parse(db)
            const existingUser = db.users.find((value)=>{
                return value.email === email;
            })
            if(existingUser){
                Swal.fire({
                    title: 'Signup Failed',
                    text: 'User already exists',
                    icon: 'error',
                })
            }
            else{
                db.users=[...db.users, {email,password}];
                localStorage.setItem('db',JSON.stringify(db))
                Swal.fire({
                    title: 'Signup Successful',
                    text: 'You can now login with your credentials',
                    icon: 'success',
                })
            }
            navigate('/login');
        }
    }
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
        <form className="bg-white p-8 rounded-md shadow border border-gray-200 w-full max-w-sm" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 font-mono tracking-tight">
                Sign up
            </h2>
            <input
                type="text"
                placeholder="Username or email address"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md bg-[#f6f8fa] focus:outline-none focus:ring-2 focus:ring-[#2da44e] text-sm"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
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
