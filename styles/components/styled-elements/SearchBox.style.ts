import styled from "styled-components";



export const SearchBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.01s;
    margin-left: auto;
    margin-right: auto;
    height: ${(props) => props.path === "/" ? "430px" : "auto"};
    width: 100%;
    z-index: 2;
    position: sticky;
    top: 75px;
    pointer-events: none;
`



export const SearchBoxStyle = styled.div`
    display: flex;
    pointer-events: all;
    background-color: black;
    justify-content: center;
    width: 422px;
    margin-top: ${(props) => props.path === "/" ? "150px" : "0px"};
    align-items: center;
    transform: translateX(0px);
    height: 50px;
    color: white;
    border-radius: 5px;
    border-radius: 30px 30px 30px 30px ;
    background-color: rgba(0,0,0,0.5);
    overflow: hidden;
    border: 1px solid gray;
    transition: 0.2s;
`


export const SearchBoxPage = styled.div`
    width:100px;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
`

export const SearchCont = styled.div`
    width:250px;
    height: 100%;
    display:flex;
    align-items: center;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    padding-left: 10px;
    padding-right: 10px;
    svg 
    {
        z-index: 2;
        color: white;
        position: absolute;
        margin-left: 10px;
    }
    input 
    {
        height: 100%;
        padding-left: 40px;
        background-color: transparent;
        color:white;
        border: none;
        
        &:focus {
            outline: none;
        }
    }
`

export const AddQuesitionCont = styled.button`
    width: 70px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: gray;
    border: none;
`


