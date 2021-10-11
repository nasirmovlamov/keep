import styled from "styled-components";


export const ProductCreateModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    left:0;
    top:0;
    z-index: 50;
    position: fixed;
    background-color: rgba(0,0,0,0.8);
`
export const ProductCreateForm = styled.form`
    background-color: gray;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 20px;
    border-radius:10px;
    height: 800px;
    overflow-y: auto;
    overflow-x: hidden;
`

export const ProductLabelCont = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    border: 1px dashed black;
    margin-top: 20px;
`