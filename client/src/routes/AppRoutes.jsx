import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Notfound from '../pages/Notfound'
import BasicLayouts from '../layouts/BasicLayouts'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Calculator from '../pages/dashboard/Calculator'
import DashboardLayout from '../layouts/DashboardLayout'
import Intro from '../pages/dashboard/Intro'
import Counter from '../pages/dashboard/Counter'
import Stopwatch from '../pages/dashboard/Stopwatch'
import TodoList from '../pages/dashboard/TodoList'
import Profile from '../pages/dashboard/Profile'


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
            <Route index element={<Intro/>}/>
            <Route path='/dashboard/intro' element={<Intro/>}/>
            <Route path='/dashboard/calculator' element={<Calculator/>}/>
            <Route path='/dashboard/counter' element={<Counter/>}/>
            <Route path='/dashboard/stopwatch' element={<Stopwatch/>}/>
            <Route path='/dashboard/todo-list' element={<TodoList/>}/>
            <Route path='/dashboard/profile' element={<Profile/>}/>
        </Route>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </div>
  )
}
