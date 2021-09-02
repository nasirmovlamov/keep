import styled from "styled-components";



export const StoreListingProductStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10px 20px;
    box-sizing: border-box;
    /* background-color: ${({theme}) => theme.pageTabs.contBG}; */
    /* border: 1px solid ${({theme}) => theme.pageTabs.border}; */
    margin-top: 10px;
    border-radius: 6px;
    column-gap: 5px;
    row-gap: 15px;
    width: 894px;
    margin-bottom:20px ;
`

export const ProductImageAndContent = styled.div`
    column-gap: 20px;
    display: flex;
`


export const ProductLanguageAndImage = styled.div`
    width: 238px;
    height: 147px;
    background-color: pink;
    border-radius: 0px 30px 0px 10px;
    position: relative;
`

export const ProductPerson = styled.img`
    border-radius: 50%;
    object-fit: cover;
    width: 32px;
    height: 32px;
    position: absolute;
    right: 0px;
    top: 0px;
    margin: 10px;
`

export const LanguageInfo = styled.div`
    position: absolute;
    left: 0px;
    bottom: 0px;
    margin: 10px;
    display: flex;
    flex-direction: column;
`

export const Language = styled.span`
    font-size: 13px;
`
export const LinesofCode = styled.span`
    font-size: 13px;
`



export const ProductContentCont = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: space-between;
    align-items: flex-start;
`
export const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    color: white;
`

export const ProductTitle = styled.a`
    /* width: 200px; */
    margin-top: 10px;
    font-size: 20px;
    color: #032728;
    cursor: pointer;
`


export const ProductDetailCont = styled.div`
    display: flex;
    column-gap: 15px;
`
export const ProductStarCont = styled.div`
    display: flex;
    column-gap: 5px;
    font-size: 13px;
`
export const ProductSoldCont = styled.div`
    display: flex;
    column-gap: 5px;
    font-size: 13px;

`
export const ProductPriceCont = styled.div`
    display: flex;
    column-gap: 5px;
    font-size: 24px;
`
export const AddCave = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffd500;
    color: #032728;
    padding: 5px 10px;
    border: none;
    border-radius: 20px;
    cursor: pointer;    
`
export const ProductTags = styled.div`
    display: flex;
    column-gap: 10px;
    margin-bottom: 10px; 
`

export const ProductTag = styled.button`
    height: 22px;
    font-size: 12px;
    color: white;
    background-color:rgba(105, 174, 191, 0.32);
    border: none;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`