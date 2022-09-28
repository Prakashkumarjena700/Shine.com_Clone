import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Blog from '../Pages/Blog'
import CurrerGuidance from '../Pages/CurrerGuidance'
import Search from '../Pages/Search'
import Jobalert from '../Pages/Jobalert'

export default function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/blog' element={<Blog/>} ></Route>
      <Route path='/currerguidance' element={<CurrerGuidance/>} ></Route>
      <Route path='/search' element={<Search/>} ></Route>
      <Route path='/jobalert' element={<Jobalert/>} ></Route>
    </Routes>
  )
}
