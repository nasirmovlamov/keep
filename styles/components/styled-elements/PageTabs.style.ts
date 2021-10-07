import styled from 'styled-components';
import { ThemeType } from '../../global/styled-utils/styling-elements/Theme.style';


export const TabsContainer  = styled.div`
    /* height:103px; */
    box-sizing: border-box;
    width:100%;
    display: flex;
    flex-direction: column;
    row-gap:15px;
    border-radius: 6px;
    margin-top: 0px;
    `



export const TabText = styled.p`
    display: flex;
    padding: 0px 20px 0px 20px;
    height: 50.08px;
    align-items: center;
    color: #63696c;
    transition:0.4s;
`
export const Line = styled.div`
    width: 0px;
    opacity:1;
    height: 2px;
    background-color: #00090e;
    transition:0.4s;
`

export const TabTagsAndResults = styled.div`
    display: flex;
    justify-content: space-between;

`

export const TabResults = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    color:#62686b;
    font-size: 20px;
    margin-left:30px;
    font-family: r;
`


export const TabTagsCont = styled.div`
    display: flex;
    align-self: flex-end;
    background-color:#FFFFFF;
    border-radius: 10px;
    column-gap: 10px;
    padding: 3px;
    padding-left: 3px;
    height: 35px;
`

export const TabTags = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid transparent;
    border-radius: 10px;
    cursor: pointer;
    background-color: transparent;
    transition: 0.4s;
    border:1px solid ${(props:{theme:ThemeType , tagFocus:boolean}) => props.tagFocus ? "white" : "transparent"};
    background-color:${(props:{theme:ThemeType , tagFocus:boolean}) => props.tagFocus ? " rgb(229,240,244)" : "transparent"};
    color:${(props:{theme:ThemeType , tagFocus:boolean}) => props.tagFocus ? "#136393" : "#8EA1A3"};
    font-size: 14px;
    font-family: r;
    &:hover 
    {
        background-color: rgb(229,240,244);
        color:#136393;
    }
`

export const Tabs = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.pageTabs.contBG};
    border-radius:10px;
    padding-left: 10px;
    box-shadow: 0px 1px 1px rgba(99,105,108,0.61), inset 0px 0px 0px rgba(99,105,108,0.61);
    height: 54px;
    align-items: flex-end;
    overflow: hidden;
`

export const TabButtonsCont = styled.div`
    display: flex;
    padding-left: 10px;
    height: 100%;
    align-items: flex-end;
    overflow: hidden;
    &:hover{
       
       ${Line}
       {
           transform: translateY(1.3px);
           width: 80%;
       }
       ${TabText}
       {
           color: #63696c;
       }
    }
`

export const TabButton = styled.button`
    display: flex;
    justify-content: space-between;
    border: none;
    font-size: 14px;
    background-color: transparent;
    color: #63696c;
    cursor: pointer;
    font-weight: 600;
    align-items:center;
    flex-direction: column;
    padding:0px;
    height: 100%;
    box-sizing: border-box;
    div
    {
        height: ${(props : {tabFocus:boolean}) => props.tabFocus ? "2px" : "0px"};
        width: ${(props:{tabFocus:boolean}) => props.tabFocus && '100%'};
    }
    p {
        color: ${({theme , tabFocus}) => tabFocus ? theme.pageTabs.focusedColor : theme.pageTabs.nonfocusedColor};
    }
    
    &:hover{
       
            ${Line}
            {
                transform: translateY(1.3px);
                width: 80%;
            }
            ${TabText}
            {
                color: #63696c;
            }
    }
    
    &:hover
    {
        &:hover ${Line}{
            opacity:1 ;
            width: 100% ;
            height: 2px ;
            transform:translateY(0px);
        }
        &:hover ${TabText}
        {
            color: #00090e;
        }
    }
`