import React, { ReactElement, FC, useEffect } from 'react'
import { page_overflowy } from '../app/feature/AppSlice';
import {  user_data, user_status, user_status_not_logged } from '../app/feature/UserSlice';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { userCheck } from '../app/thunks/AuthThunk';
import Footer from './Footer'
import Modals from './Modals/Modals';
import Navbar from './Navbar'
import OverlayBackground from './Overlay';
import SearchBox from './SearchBox';
import { openChat } from '../app/feature/ChatBoxSlice'
import router from 'next/router';
import { forumWordRegex } from '../logic/regex/NavbarRegex';
import Head from 'next/head'
import { LayoutCont, LayoutMain } from '../styles/pages/Page.styled';
import LayoutSide from './LayoutSide';


interface Props {
    // any props that come into the component
}

const Layout: FC<Props> = ({ children, ...props }) => {
    const dispatch = useAppDispatch()
    const userStatus = useAppSelector(user_status)
    const pageOverflowY = useAppSelector(page_overflowy)
    const userData = useAppSelector(user_data)

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            dispatch(userCheck())
        }
        else 
        {
            dispatch(user_status_not_logged("not-logged"))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const openUserChat = () => {
        dispatch(openChat(""))
    }
    

    if(userStatus === "logged" || userStatus === "not-logged") {
        return (
            <>
                <LayoutCont>
                    <LayoutSide/>
                    <LayoutMain>
                        <Navbar/>
                        {/*<SearchBox/>*/}
                        {children}

                        {/*{userData !== null && <button type="button" style={{position:"fixed",right:"0px",bottom:"0px"}} onClick={openUserChat}>Chat</button>}
                        <Modals/>
                        {/*<Footer/>*/}
                    </LayoutMain>
                </LayoutCont>

               ``

            </>
        )
    }
    return(
        <></>
    )

};


export default Layout
