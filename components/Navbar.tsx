import React, { ReactElement, useEffect,  useState } from 'react'
import {Enterance, Guest, ImageStyle1, ImageStyle2,  Light, LightShadow, LightShadow2, Line,  LinksStyle, LinkStyle, LiStyle, Logged, LoginButton, Logo, LogoText, Logout, Nav, PersonName, RegisterButton} from '../styles/components/styled-elements/Navbar.style'
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
import { changeModalAction, is_loading, is_Logged,  user_data, user_modals } from '../app/feature/AuthSlice'
import { userCheck, userLogin, userLogout } from '../app/thunks/AuthThunk'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
}

function Navbar({}: Props): ReactElement {
    const router = useRouter()
    const {pathname} = router
    const dispatch = useAppDispatch();
    const userModals = useAppSelector(user_modals);
    const userData = useAppSelector(user_data);
    const isLogged = useAppSelector(is_Logged);
    const isLoading = useAppSelector(is_loading);
    const [navView, setnavView] = useState<JSX.Element>()
    
    useEffect(() => {
        loginChecker()
    }, [isLogged])
    

    const pathChecker = (path:string) => {
        if(pathname === "/forum")
        {
            return true
        }
        else if (pathname === "/store")
        {
            return true
        }
        else if(pathname === "/pedi")
        {
            return true 
        }
        else 
        {
            return false
        }
    }

    const exit = async () => {
        await dispatch(userLogout())
        // window.location.reload() 
    }

    const loginChecker = () => {
        if(!isLogged)
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
            return ""
        }
        else if(userData !== null)
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
                    <Logout onClick={exit}>
                        exit 
                    </Logout>
                </>
            setnavView(view)
            return ""
        }
    }

    
    return (
        <Nav>
            <Link href="/" ><Logo> <Image src={mainLogo} />   <Light/> <LightShadow/> <LightShadow2/> <LogoText>abyss</LogoText> </Logo></Link>
            <LinksStyle>
                <Link href="/forum">
                    <LiStyle focus={pathname === "/forum" ? true: false}>
                        <LinkStyle>Forum</LinkStyle>
                        <Line />
                    </LiStyle>
                </Link> 

                <Link href="/store">
                    <LiStyle focus={pathname === "/store" ? true: false}>
                        <LinkStyle>Store</LinkStyle>
                        <Line/>
                    </LiStyle>
                </Link>
                
                <Link href="/pedi">
                    <LiStyle focus={pathname === "/pedi" ? true: false}>
                        <LinkStyle>Pedia</LinkStyle>
                        <Line/>
                    </LiStyle>
                </Link> 
            </LinksStyle>

            <Enterance>
                {navView}
            </Enterance>
        </Nav>
    )
}

export default Navbar

