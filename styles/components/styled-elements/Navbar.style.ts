import styled from "styled-components";
import { useSelector } from "react-redux";
import { ThemeType } from "../../global/styled-utils/styling-elements/Theme.style";

// color = (isLogged) ? "red" : "gray"


export const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left: 25px;
    padding-right: 20px;
    background-color: ${({theme}) => theme.backgroundMain};
    margin: 0px;
    position: sticky;
    top:0px;
    height: 60px;
    z-index: 999;
`





export const LiStyle = styled.li`
    display:flex;
    justify-content:center;
    align-items:center;
    padding-bottom: 3px;
    column-gap: 40px;
    font-size: 13px;
    color:#92929F;
    letter-spacing: 1px;
    font-weight: 600;
    color:white;
    cursor:pointer;
    padding:8px 10px;
    border-radius:5px;
    &:hover 
    {
        color:#3699FF;
        background-color: #1B1B29CC;
    }
`

export const LinksStyle = styled.ul`
    display:flex;
    /* justify-content:center; */
    align-items:center;
    height:100%;    
    column-gap: 25px;
    margin-left:20px;
`



export const ImageStyle1 = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    /* position: absolute; */
`
export const ImageStyle2 = styled.div`
    display:flex;
    /* justify-content:center; */
    /* align-items:center; */
    position: absolute;
    opacity: 0;
    transition: 0.15s;
    cursor: pointer;

`


export const PersonName = styled.label`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right: 15px;
    color: ${({theme}) => theme.navbar.navLinks};
    cursor: pointer;
    margin-top: 1px;
`


export const LoginButton = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    width: 100px;
    height: 60px;
    border: none;
    background-color: transparent;
    filter: ${({theme}) => `invert(${theme.navbar.navLogin})`};

    img 
    {
        width: 50px;
        height: 30px;
    }
    
`
export const RegisterButton = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    width: 100px;
    height: 60px;
    border: none;
    background-color: transparent;
    filter: ${({theme}) => `invert(${theme.navbar.navRegister})`};
    img 
    {
        width: 50px;
        height: 40px;
    }
    
`

export const Enterance = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
export const Logged = styled.div`
    display:flex;
    /* justify-content:center; */
    align-items:center;
    position: relative;
    &:hover ${ImageStyle2} , &:hover ${PersonName}
    {
        opacity: 1;
        color: ${({theme}) => theme.navbar.navLinksHovered};   
    }
`
export const Logout = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    position: relative;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: 0.2s;
    font-size: 16px;
    color: ${({theme}) => theme.navbar.navLinks};

    &:hover 
    {
        color: ${({theme}) => theme.navbar.navLinksHovered};
    }
    &:focus 
    {
        outline: none;
    }
`


export const Guest = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`