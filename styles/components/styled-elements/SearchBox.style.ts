import styled from "styled-components";



export const SearchBoxContainer = styled.div<{path:string}>`
    display: flex;
    /* flex-direction: column; */
    /* align-items: center; */
    column-gap: 20px;
    padding-top: ${(props) => props.path === "/" ? "20vh" : "0vh"};
    height: ${(props) => props.path === "/" ? "70vh" : "auto"};
    transition: 0.01s;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    z-index: 2;
    pointer-events: none;
    transition: 0.4s;
`

export const SearchBoxThunkAndCont = styled.div<{direction:string}>`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
    transform: ${({direction}) => direction === "up" ? "translateY(0px)" : "translateY(-51px)"};
    width: 808px;
    position: sticky;
    transition: 0.5s;
    z-index: 100;

`

export const SearchBoxThunk = styled.button<{direction:string}>`
    display: flex;
    flex-direction: column;
    color: black;
    pointer-events: all;
    border: none;
    background-color: #00090e;
    color: gray;
    width: 200px;
    text-align: center;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    height: 16px;
    border-radius: 0px 0px 5px 5px;
    transform: ${({direction})=>direction === "down" ? "translateY(0px)" : "translateY(-20px)"};
    pointer-events: ${({direction})=>direction === "down" ? "all" : "none"};
    transition: 0.2s;
`

export const SearchBoxStyle = styled.div<{direction:string, path:string}>`
    display: flex;
    pointer-events: all;
    background-color: black;
    width: 808px;
    transform: translateX(0px);
    height: ${(props) => props.path === "/" ? "65px" : "50px"};
    color: white;
    border-radius: 5px;
    border-radius: 30px 30px 30px 30px ;
    border: none;
    box-shadow: 0px 1px 1px rgba(99,105,108,0.61), inset 0px 0px 0px rgba(99,105,108,0.61);
    transition: 0.4s;
    background-color: white;
    align-items: flex-start;
    justify-content: space-between;
    box-sizing: border-box;
    z-index: 9999;
    transform-origin: top;
    transition: 0.5s;
`


export const SearchBoxPage = styled.div`
    width:100px;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    background-color: white;
    color: #474D51;
    font-family: r;
    border-radius: 30px 0px 0px 30px ;

    flex: 0 0 100px; /* flex-grow, flex-shrink, flex-basis */
`

export const SearchInput = styled.input<{path:string}>`
    border-radius: ${(props) => props.path === "/" ? "0px 30px 30px 0px" : "inherit"}  ;
    height: 100%;
    padding-left: 40px;
    border: none;
    color:black;
    width: 100%;
    z-index: 3;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #d9dadb;
    }
`

export const SearchCont = styled.div`
    width:100%;
    justify-self: stretch;
    height: 100%;
    display:flex;
    align-items: center;
    border-left: 1px solid #E5E6E6;

    position: relative;
    svg 
    {
        z-index: 4;
        color: white;
        position: absolute;
        margin-left: 10px;
        color: #d9dadb;
    }
    input 
    {
        
    }
`
export const SearchNav = styled.div<{path:string}>`
    position: absolute;
    display:flex;
    flex-direction: column;
    border-left: 1px solid #E5E6E6;
    border-right: 1px solid #E5E6E6;
    background-color: white;
    z-index: 1;
    /* opacity: 0; */
    transition: 0.5s;
    /* top:50px; */
    border: 1px solid gray;
    border-top: 1px solid lightgray ;
    width: ${(props) => props.path === "/" ? "95%" : "100%"}  ;
    align-self: flex-end;
    margin: 0px;
    padding: 0px;
    border: 0px;
`
export const SearchNavQuery = styled.button`
    display: flex;
    padding: 4px 10px;
    align-items: center;
    background-color: white;
    border: none;
    svg 
    {
        z-index: 4;
        color: white;
        position: absolute;
        margin-left: 0px;
        color: #d9dadb;
    }
    span 
    {
        height: 100%;
        padding-left: 30px;
        border: none;
        color: lightgray;
    }
`

export const AddQuesitionCont = styled.button`
    width: 100px;
    flex: 0 0 100px; /* flex-grow, flex-shrink, flex-basis */
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00578b;
    color: white;
    border: none;
    font-size: 15px;
    font-family: s;
    border-radius: 0px 30px 30px 0px ;

`


