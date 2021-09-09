import React, { ReactElement, FC } from 'react'
import Footer from './Footer'
import Modals from './Modals/Modals';
import Navbar from './Navbar'



interface Props {
    // any props that come into the component
}

const Layout: FC<Props> = ({ children, ...props }) => (
        <>
            <Navbar/>
                <main>{children}</main>   
                Modals/>
            <Footer/>   
            
        </>
);


export default Layout
