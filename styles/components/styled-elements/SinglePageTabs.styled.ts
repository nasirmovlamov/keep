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
    &:hover 
    {
    }
`



export const SingleTabText = styled.span`
    display: flex;
    padding: 12px 20px 0px 20px;
`
export const SingleLine = styled.div`
    width: 0px;
    opacity:0;
    height: 2px;
    background-color: gray;
    margin-top: 5px;
    transition: 0.2s;
`

export const SingleTabButton = styled.a`    
    display: flex;
    border: none;
    font-size: 18px;
    background-color: transparent;
    color: #8EA1A3;
    cursor: pointer;
    font-weight: 600;
    align-items:center;
    flex-direction: column;
    padding:0px;
    height: 41px;
    box-sizing: border-box;
    div 
    {
        opacity: ${(props:{tabFocus:boolean}) => props.tabFocus && '1'};
        width: ${(props:{tabFocus:boolean}) => props.tabFocus && '100%'};

    }
    span {
        color: ${(props : {theme:ThemeType , tabFocus:boolean}) => props.tabFocus ?  props.theme.navbar.navLinksHovered :  props.theme.navbar.navLinks};
    }
    &:hover
    {
        div{
            opacity:1  !important;
            width: 100% !important;
            height: 2px !important;
            transform: scale(1) !important;
        }
    }
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
    &:hover ${SingleLine}
    {
        height: 1px;
        transform: scale(0.8);
    }
`