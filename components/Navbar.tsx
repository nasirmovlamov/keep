import React, { ReactElement } from 'react'
import {Enterance, Guest, ImageStyle1, ImageStyle2, ImageStyleLogin, Light, LightShadow, LightShadow2, Line, Line1, Line2, Line3, LinksStyle, LinkStyle, Lityle, Logged, Logo, Nav} from '../styles/components/styled-elements/Navbar.style'
import Image from 'next/image'
import mainLogo from '../public/static/img/main-logo.svg'
import lightPerson from '../public/static/img/light-person.png'
import darkPerson from '../public/static/img/dark-person.png'
import loginPng from '../public/static/img/login.svg'
interface Props {
    
}

function Navbar({}: Props): ReactElement {
    return (
        <Nav>
            <Logo> <Image src={mainLogo} />   <Light/> <LightShadow/> <LightShadow2/></Logo>
            <LinksStyle>
                <Lityle>
                    <LinkStyle>Forum</LinkStyle> 
                    <Line/>
                </Lityle>
                
                <Lityle>
                    <LinkStyle>Store</LinkStyle> 
                    <Line/>
                </Lityle>
                
                <Lityle>
                    <LinkStyle>Pedi</LinkStyle>  
                    <Line/>
                </Lityle>
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
                    <ImageStyleLogin>
                        <Image width="110px" height='45px' src={loginPng} /> 
                    </ImageStyleLogin>
                </Guest>
            </Enterance>
        </Nav>
    )
}

export default Navbar
