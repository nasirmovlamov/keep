import React, { ReactElement, FC, useEffect } from 'react'
import { page_overflowy } from '../app/feature/AppSlice';
import {  user_status, user_status_not_logged } from '../app/feature/AuthSlice';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { userCheck } from '../app/thunks/AuthThunk';
import Footer from './Footer'
import Modals from './Modals/Modals';
import Navbar from './Navbar'
import OverlayBackground from './Overlay';
import SearchBox from './SearchBox';



interface Props {
    // any props that come into the component
}

const Layout: FC<Props> = ({ children, ...props }) => {
    const dispatch = useAppDispatch()
    const userStatus = useAppSelector(user_status)
    const pageOverflowY = useAppSelector(page_overflowy)

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            dispatch(userCheck())
        }
        else 
        {
            dispatch(user_status_not_logged("not-logged"))
        }
    }, [])
   
    if(userStatus === "logged" || userStatus === "not-logged") {
        return (
            <>
                <div style={{width:"100%" , minHeight:"100vh", backgroundImage: "url(../../../public/static/img/default-vector-background.png)" }}>
                    <Navbar/>
                    <SearchBox/>
                    <main>{children}</main>   
                    <Modals/>
                    <Footer/>
                </div>   

                {
                (pageOverflowY === "hidden" 
                    && 
                    <div style={{width:"10px" , height:"100vh" , background:"white", right:"0px",  zIndex:"99999999999999", backgroundColor:"transparent"}}>
                        <div style={{width:"100%" , height:"59.4px" , backgroundColor:"#00090e"}}></div>
                    </div> 
                )
                }

            </>
        )
    }
    return(
        <></>
    )

};


export default Layout
