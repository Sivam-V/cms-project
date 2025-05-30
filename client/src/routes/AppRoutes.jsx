import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Notfound from '../pages/Notfound'
import BasicLayouts from '../layouts/BasicLayouts'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Calculator from '../pages/dashboard/Calculator'
import DashboardLayout from '../layouts/DashboardLayout'


export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BasicLayouts/>}>
            <Route index element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Route>
        <Route path='/dashboard' element={<DashboardLayout/>}>
            <Route index element={<Calculator/>}/>
            <Route path='/dashboard/calculator' element={<Calculator/>}/>
            <Route path='/dashboard/calculator' element={<Calculator/>}/>
            <Route path='/dashboard/calculator' element={<Calculator/>}/>
            <Route path='/dashboard/calculator' element={<Calculator/>}/>
            <Route path='/dashboard/calculator' element={<Calculator/>}/>
        </Route>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </div>
  )
}
