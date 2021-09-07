import styled from 'styled-components';
import { ThemeType } from '../../global/styled-utils/styling-elements/Theme.style';



export const SingleTabsContainer  = styled.div`
    /* height:103px; */
    box-sizing: border-box;
    width:100%;
    display: flex;
    flex-direction: column;
    row-gap:10px;
    padding-top: 10px;
    padding-right: 51px;
    border-bottom: 1px solid ${({theme}) => theme.pageTabs.border};
    margin-top: 10px;
    position: sticky;
    top: 76px;
    background-color: #00090E;
    padding-bottom: 0px;
    &:hover 
    {
    }
`



export const SingleTabText = styled.span`
    display: flex;
    padding: 12px 20px 0px 20px;
    transition: 0.2s;

`
export const SingleLine = styled.div`
    width: 0px;
    opacity:0;
    height: 2.5px;
    background-color: white;
    transition: 0.2s;
    align-self: center;
`


export const SingleTabTagsCont = styled.div`
    display: flex;
    align-self: flex-end;
`

export const SingleTabTags = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color:#8EA1A3;
    border: 1px solid transparent;
    border-radius: 20px;
    cursor: pointer;
    background-color: transparent;
    transition: 0.4s;
    border:1px solid ${(props:{theme:ThemeType , tagFocus:boolean}) => props.tagFocus ? "white" : "transparent"};
   
    /* &:hover 
    {
        border: 1px solid lightgray;
        color:white;
    } */
`

export const SingleTabs = styled.div`
    display: flex;
    height: 40px;
    &:hover ${SingleLine}
    {
        opacity: 0.3;
        transform: scaleX(0.8);
    }
`



export const SingleTabButton = styled.button`    
    display: flex;
    border: none;
    font-size: 18px;
    background-color: transparent;
    color: #8EA1A3;
    cursor: pointer;
    font-weight: 600;
    align-items:center;
    flex-direction: column;
    justify-content: space-between;
    padding:0px;
    box-sizing: border-box;
    text-decoration: none;
    div 
    {
        opacity: ${(props:{tabActive:boolean}) => props.tabActive && '1'};
        width: ${(props:{tabActive:boolean}) => props.tabActive && '100% '};
        height: ${(props:{tabActive:boolean}) => props.tabActive && '2.5px'};
        transform: scale(1);
    }
    span {
        color: ${(props : {theme:ThemeType , tabActive:boolean}) => props.tabActive ?  props.theme.navbar.navLinksHovered :  props.theme.navbar.navLinks};
    }
    &:hover
    {   
        span{
            color: white;
        }
        div{
            opacity:1  !important;
            width: 100% !important;
            height: 2.5px !important;
            transform: scale(1) !important;
        }
    }
`