import React, { ReactElement } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'


function Layout({children}): ReactElement {
    return (
        <>
            <Navbar/>
            <main>{children}</main>   
            <Footer/>   
        </>
    )
}

export default Layout
