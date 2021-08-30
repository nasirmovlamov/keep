import React, { ReactElement, useEffect, useState } from 'react'
import {Enterance, Guest, ImageStyle1, ImageStyle2,  Light, LightShadow, LightShadow2, Line,  LinksStyle, LinkStyle, LiStyle, Logged, LoginButton, Logo, Logout, Nav, PersonName, RegisterButton} from '../styles/components/styled-elements/Navbar.style'
import Image from 'next/image'
import mainLogo from '../public/static/img/main-logo.svg'
import lightPerson from '../public/static/img/light-person.png'
import darkPerson from '../public/static/img/dark-person.png'
import loginPng from '../public/static/img/login.svg'
import registerSVG from '../public/static/img/register-icon.svg'
import RegisterModal from './Modals/RegisterModal'
import LoginModal from './Modals/LoginModal'
import Modals from './Modals/Modals'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { changeModalAction, is_loading, is_Logged, userState, user_modals } from '../app/containers/AuthSlice'
import { userCheck, userLogin, userLogout } from '../app/thunks/AuthThunk'
import { GetServerSideProps } from 'next'
interface Props {
}

function Navbar({}: Props): ReactElement {
    const dispatch = useAppDispatch();
    const userModals = useAppSelector(user_modals);
    const userData = useAppSelector(userState);
    const isLogged = useAppSelector(is_Logged);
    const isLoading = useAppSelector(is_loading);
    const [navView, setnavView] = useState(null)
    useEffect(() => {
        dispatch(userCheck())
        
        if(isLogged === null)
        {

        }
        else if(isLogged)
        {
            const view = <>
                    <Logged> 
                        <ImageStyle1>
                            <Image width="70px" height='40px' src={lightPerson} /> 
                        </ImageStyle1>
                        <ImageStyle2>
                            <Image width="70px" height='40px' src={darkPerson} /> 
                        </ImageStyle2>
                        <PersonName>
                            {userData.name}
                        </PersonName>
                    </Logged>
                    <Logout onClick={() => dispatch(userLogout())}>
                        exit 
                    </Logout>
                </>
            setnavView(view)
        }
        else
        {
            const view = 
            <Guest>  
                <LoginButton      onClick={() => dispatch(changeModalAction("login"))}>
                    <Image  src={loginPng} /> 
                </LoginButton>
                <RegisterButton   onClick={() => dispatch(changeModalAction("register"))}>
                    <Image  src={registerSVG} /> 
                </RegisterButton>
            </Guest>
            setnavView(view)
        }
    }, [isLogged])

    
                
    return (
        <Nav>
            <Logo> <Image src={mainLogo} />   <Light/> <LightShadow/> <LightShadow2/></Logo>
            <LinksStyle>
                <LiStyle>
                    <LinkStyle>Forum</LinkStyle> 
                    <Line/>
                </LiStyle>
                
                <LiStyle>
                    <LinkStyle>Store</LinkStyle> 
                    <Line/>
                </LiStyle>
                
                <LiStyle>
                    <LinkStyle>Pedi</LinkStyle>  
                    <Line/>
                </LiStyle>
            </LinksStyle>

            <Enterance>
                {navView}
                <Modals  />
                
            </Enterance>
        </Nav>
    )
}

export default Navbar

