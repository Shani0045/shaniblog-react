import React from 'react'
import { Routes , Route} from 'react-router-dom';
import Home from "../pages/home/Home"
import Contact from '../pages/contact/Contact';
import Blog from '../pages/blog/Blog';
import Dummy from '../pages/dummy/Dummy';
import About from '../pages/about/About';

function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='login' element="hello login page"></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='blog' element={<Blog/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='*' element="Not found"></Route>
        <Route path='dummy' element={<Dummy/>}></Route>
    </Routes>
  )
}

export default AppRouter