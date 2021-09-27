import styled from "styled-components";



export const SearchBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${(props) => props.path === "/" ? "20vh" : "0vh"};
    height: ${(props) => props.path === "/" ? "70vh" : "auto"};
    transition: 0.01s;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    z-index: 2;
    /* position: sticky; */
    /* top: 75px; */
    pointer-events: none;
    transition: 0.4s;

`



export const SearchBoxStyle = styled.div`
    display: flex;
    pointer-events: all;
    background-color: black;
    /* justify-content: space-between; */
    width: 808px;
    /* margin-top: ${(props) => props.path === "/" ? "150px" : "0px"}; */
    transform: translateX(0px);
    height: 50px;
    color: white;
    border-radius: 5px;
    border-radius: 30px 30px 30px 30px ;
    overflow: hidden;
    border: none;
    box-shadow: 0px 1px 1px rgba(99,105,108,0.61), inset 0px 0px 0px rgba(99,105,108,0.61);
    transition: 0.4s;
    background-color: white;
    align-items: flex-start;
    justify-content: space-between;
    box-sizing: border-box;
    z-index: 2;
    transform: ${(props) => props.direction === "up" ? "translateY(0px)" : "translateY(-51px)"};
    transform-origin: top;
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
    flex: 0 0 100px; /* flex-grow, flex-shrink, flex-basis */
`

export const SearchCont = styled.div`
    width:100%;
    justify-self: stretch;
    height: 100%;
    display:flex;
    align-items: center;
    border-left: 1px solid #E5E6E6;
    border-right: 1px solid #E5E6E6;
    padding-left: 10px;
    padding-right: 10px;
    svg 
    {
        z-index: 2;
        color: white;
        position: absolute;
        margin-left: 10px;
        color: #d9dadb;
    }
    input 
    {
        height: 100%;
        padding-left: 40px;
        border: none;
        color:black;
        width: 100%;
        &:focus {
            outline: none;
        }
        &::placeholder {
            color: #d9dadb;
        }
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
`


