import styled from "styled-components";

export const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left: 25px;
    padding-right: 20px;
    padding-top: 7px;
    padding-bottom: 10px;
    border: 1px solid lightgray;
    margin: 0px;
`



export const Light = styled.div`
    width:7px;
    height:7px;
    position:absolute;
    background-color:rgb(255, 213, 0);
    left:76px;
    top:21px;
    border-radius:50%;
    z-index:2;
    transition: 0.2s;

`


export const LightShadow = styled.div`
    width:17px;
    height:17px;
    position:absolute;
    background-color:#ffd500;
    left:71px;
    top:16px;
    border-radius:50%;
    transition: 0.2s;
    stroke-width: 0;
    opacity: 0;
    fill: #ffd500;stroke: #8c8c8c;stroke-width: 0
`
export const LightShadow2 = styled.div`
    width:25px;
    height:25px;
    position:absolute;
    background-color:#ffd500;
    left:67px;
    top:12px;
    border-radius:50%;
    transition: 0.2s;
    stroke-width: 0;
    opacity: 0;
`
export const Logo = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    
    
    &:hover ${LightShadow} {
        opacity: 0.38;

    }
    &:hover ${LightShadow2} {
        opacity: 0.169;

    }
    
    img 
    {
        width: 220px;
        z-index: 3;
        height: 58px;
    }
`


export const LinksStyle = styled.ul`
    display:flex;
    justify-content:center;
    align-items:center;
    height:57px;    
    column-gap: 76px;
`


export const LinkStyle = styled.a`
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: m;
    letter-spacing: 1px;
    color: rgba(3, 39, 40, 0.61);
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;

`
export const Line = styled.div`
    width: 10px;
    opacity: 0;
    height: 2px;
    border-radius: 100px;
    background-color:  rgb(3, 39, 40);
    position:absolute;
    bottom: 0px;
    transition: 0.3s;
`


export const Lityle = styled.li`
    display:flex;
    justify-content:center;
    align-items:center;
    height:50px;    
    padding-bottom: 3px;
    column-gap: 40px;
    font-size: 18px;
    width: 195px;
    font-family: m;
    letter-spacing: 1px;
    color: rgba(3, 39, 40, 0.61);
    font-weight: 600;
    position: relative;
    margin-top: 27px;
    &:hover 
    {
        div 
        {
            opacity: 1;
            width: 120px;
        }
        a {
            color:rgb(3, 39, 40);
        }
    }

`

export const ImageStyle1 = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
export const ImageStyle2 = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position: absolute;
    opacity: 0;
    transition: 0.1s;
`
export const ImageStyleLogin = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    
`

export const Enterance = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
export const Logged = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position: relative;
    &:hover ${ImageStyle2}
    {
        opacity: 1;
    }
`

export const Guest = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`