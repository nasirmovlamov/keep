import React, { ReactElement, useState } from 'react'
import {Enterance, Guest, ImageStyle1, ImageStyle2,  Light, LightShadow, LightShadow2, Line,  LinksStyle, LinkStyle, LiStyle, Logged, LoginButton, Logo, Nav, RegisterButton} from '../styles/components/styled-elements/Navbar.style'
import Image from 'next/image'
import mainLogo from '../public/static/img/main-logo.svg'
import lightPerson from '../public/static/img/light-person.png'
import darkPerson from '../public/static/img/dark-person.png'
import loginPng from '../public/static/img/login.svg'
import registerSVG from '../public/static/img/register-icon.svg'
import RegisterModal from './RegisterModal'
import LoginModal from './LoginModal'
interface Props {
    
}

function Navbar({}: Props): ReactElement {

    const [modals, setmodals] = useState({login:true, register:true,another:false})

    const loginModal = (modalType:boolean) => setmodals({...modals , login:modalType })
    const registerModal = (modalType:boolean) => setmodals({...modals , register:modalType })
    const anotherModal = (modalType:boolean) => setmodals({...modals , another:modalType })


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
                <Logged> 
                    <ImageStyle1>
                        <Image width="110px" height='60px' src={lightPerson} /> 
                    </ImageStyle1>
                    <ImageStyle2>
                        <Image width="110px" height='60px' src={darkPerson} /> 
                    </ImageStyle2>
                </Logged>
                <Guest>  
                    <LoginButton onClick={() => loginModal(true)}>
                        <Image  src={loginPng} /> 
                    </LoginButton>
                    <RegisterButton onClick={() => registerModal(true)}>
                        <Image  src={registerSVG} /> 
                    </RegisterButton>
                    {modals.register && <RegisterModal/>}
                    {/* {modals.login && <LoginModal/>} */}
                </Guest>
            </Enterance>
        </Nav>
    )
}

export default Navbar
