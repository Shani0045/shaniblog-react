import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

function Layout({children}) {
  return (
    <>
      <Navbar/>
      <Header/>
      <div className='container'>
        {children}
      </div>
      <Footer/>
    </>
  )
}

export default Layout
