import styled from 'styled-components';



export const LayoutCont = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    height: 100vh;
    background: #27273a;
`




export const LayoutMain = styled.div`
    width: calc(100% - 265px);
    height: 100vh;
    min-height: 100vh;
    background: #27273a;
    overflow-y:auto;
    overflow-x: hidden;
`





export const MainPartOfPageStyle = styled.div`
    width: 808px;
    padding-top: 74px;
    display: flex;
    justify-content: center;
    z-index: 2;
`


export const SidePartOfPageStyle = styled.aside`
    width: 400px;
    box-sizing: border-box;
    padding-top: 25px;
    display: flex;
    padding-top: 115px;
    justify-content: center;

`

export const PageDefaultStyle = styled.main`
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    align-items: stretch;
`
