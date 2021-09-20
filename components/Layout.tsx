import React, { ReactElement, FC, useEffect } from 'react'
import {  user_status, user_status_not_logged } from '../app/feature/AuthSlice';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { userCheck } from '../app/thunks/AuthThunk';
import Footer from './Footer'
import Modals from './Modals/Modals';
import Navbar from './Navbar'
import SearchBox from './SearchBox';



interface Props {
    // any props that come into the component
}

const Layout: FC<Props> = ({ children, ...props }) => {
    const dispatch = useAppDispatch()
    const userStatus = useAppSelector(user_status)

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
                <Navbar/>
                    <SearchBox/>
                    <main>{children}</main>   
                    <Modals/>
                <Footer/>   
            </>
        )
    }
    return(
        <></>
    )

};


export default Layout
