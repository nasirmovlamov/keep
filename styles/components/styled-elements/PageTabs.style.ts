import styled from 'styled-components';


export const TabsContainer  = styled.div`
    /* height:103px; */
    box-sizing: border-box;
    width:100%;
    display: flex;
    flex-direction: column;
    row-gap:10px;
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 51px;
    background-color: ${({theme}) => theme.pageTabs.contBG};
    border-radius: 6px;
    border: 1px solid ${({theme}) => theme.pageTabs.border};
    margin-top: 10px;
    &:hover 
    {
        border: 1px solid ${({theme}) => theme.pageTabs.hover.border};
    }
`



export const TabText = styled.span`
    display: flex;
    padding: 12px 20px 0px 20px;
`
export const Line = styled.div`
    width: 0px;
    opacity:0;
    height: 2px;
    background-color: white;
    margin-top: 5px;
    transition: 0.2s;
`

export const TabButton = styled.button`
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
        opacity: ${({tabFocus}) => tabFocus && '1'};
        width: ${({tabFocus}) => tabFocus && '100%'};

    }
    span {
        color: ${({theme , tabFocus}) => tabFocus ? theme.navbar.navLinksHovered : theme.navbar.navLinks};
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

export const TabTagsCont = styled.div`
    display: flex;
    align-self: flex-end;
`

export const TabTags = styled.button`
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
    border:1px solid ${({theme , tagFocus}) => tagFocus ? "white" : "transparent"};

    /* &:hover 
    {
        border: 1px solid lightgray;
        color:white;
    } */
`

export const Tabs = styled.div`
    display: flex;
    &:hover ${Line}
    {
        height: 1px;
        transform: scale(0.8);
    }
`