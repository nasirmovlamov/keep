import React, { ReactElement } from 'react'
import {Enterance, Guest, Light, LightShadow, LightShadow2, Line, Line1, Line2, Line3, LinksStyle, LinkStyle, Lityle, Logged, Logo, Nav} from '../styles/components/styled-elements/Navbar.style'
import Image from 'next/image'
import mainLogo from '../public/static/img/main-logo.svg'
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
                <Logged> Logged</Logged>
                <Guest>  Login</Guest>
            </Enterance>
        </Nav>
    )
}

export default Navbar
