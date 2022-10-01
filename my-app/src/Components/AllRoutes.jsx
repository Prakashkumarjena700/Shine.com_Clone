import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Blog from '../Pages/Blog'
import CurrerGuidance from '../Pages/CurrerGuidance'
import Search from '../Pages/Search'
import Jobalert from '../Pages/Jobalert'
import Register from '../Pages/Register'
import Profileboster from '../Pages/Profileboster'
import ApplicationHighleter from '../Pages/ApplicationHighleter'
import ResumeWriting from '../Pages/ResumeWriting'
import JobseekerViewall from "../Pages/JobseekerViewall"
import SalseandMarketing from "../Pages/SalseandMarketing"
import Courses from '../Pages/Courses'


export default function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/blog' element={<Blog/>} ></Route>
      <Route path='/currerguidance' element={<CurrerGuidance/>} ></Route>
      <Route path='/search' element={<Search/>} ></Route>
      <Route path='/jobalert' element={<Jobalert/>} ></Route>
      <Route path='/register' element={<Register/>} ></Route>
      <Route path='/profileboster' element={<Profileboster/>} ></Route>
      <Route path='applicationhighleter' element={<ApplicationHighleter/>} ></Route>
      <Route path='resumewriting' element={<ResumeWriting/>} ></Route>
      <Route path='jobseekerviewall' element={<JobseekerViewall/>} ></Route>
      <Route path='salesandmarketing' element={<SalseandMarketing/>} ></Route>
      <Route path='/courses' element={<Courses/>} ></Route>
    </Routes>
  )
}
