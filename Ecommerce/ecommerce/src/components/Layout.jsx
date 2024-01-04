import React from 'react'
import Navabar from './Navabar'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <div>
          <Navabar />
          <div className='content'>
              {children}
          </div>
          <Footer />
    </div>
  )
}

export default Layout
