import styled from "styled-components";


export interface PercentageLineProps {
    percentage:number
}

export interface ProductIconProps {
    backgroundColor:string
    index:number
}

export const FormQuestionCont = styled.div`
    display: flex;
    width: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 20px;
    padding-right: 10px;
    box-sizing: border-box;
    background-color: ${({theme}) => theme.pageTabs.contBG};
    border-radius: 6px;
    column-gap: 5px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 1px 1px rgba(99,105,108,0.61), inset 0px 0px 0px rgba(99,105,108,0.61);
    justify-content: space-between;
    height: 125px;
    align-items: center;
`

export const PersonCont = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    justify-content: center;
`
export const Avatar = styled.img`
    width: 55px;
    height:55px;
    border-radius:50%;
    object-fit: cover;
`
export const Name = styled.span`
    font-size: 12px;
    display: flex;
    color: #00090e;
    opacity: 0.62;
    width: 55px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const TextCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 10px;
    width: 644px;
`

export const Title = styled.h2`
    font-size: 20px;
    color: #00578b;
    cursor: pointer;
    text-transform: capitalize;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const Content = styled.p`
    font-size: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #00090e;
    font-family: r;
`

export const BottomSide = styled.div`
    display: flex;
    justify-content: space-between;
`

export const QuestionTags = styled.div`
    display: flex;
    column-gap: 10px;
`


export const Tags = styled.button`
    height: 22px;
    font-size: 12px;
    color: white;
    background-color:#E5F0F4;
    border: none;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    color: #00578b;
    font-family: r;
    justify-content: center;
    border: 1px solid lightgray;
    align-items: center;
    box-shadow: 0px 0px 0px 0.5px rgba(158,161,163,0.38), inset 0px 0px 1px rgba(158,161,163,1);
`
export const ProductsIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProductIcon = styled.div<ProductIconProps>`
    width: 18px;
    height: 18px;
    box-shadow: 0px 1px 2px rgba(99,105,108,1), inset 0px 0px 0px rgba(99,105,108,0.61);
    border-radius: 50%;
    background-color: ${({backgroundColor}) =>  backgroundColor};
    position: absolute;
    margin-right: ${({index}) => (index * 15)} px;
`

export const CountOfProducts = styled.div`
    display: flex;
    column-gap: 10px;
    align-items: center;
`
export const ProductCount = styled.div`
    font-family: r;
    font-size: 12px;
    text-decoration: none solid rgb(71, 77, 81);
    color: #474d51;
    span 
    {
        color: #00578b;
        font-size: 16px;
        font-family: m;
        text-decoration: none solid rgb(0, 87, 139);
    }
`



export const StatisticCont = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 95px;
    column-gap: 5px;
    row-gap:5px;
    box-sizing: border-box;
    height: 100%;

`

export const AnswerCont = styled.div`
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
    
`

export const AnswerCount = styled.div`
    width: 40px;
    height: 23px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 5px;
    color:#00578b;
    font-size:20px;

`

export const Text = styled.span`
    font-size: 13px;
    color:#474d51;

`
export const ThumbIcon = styled.span`
    font-size: 13px;
    color:#00578b;
    font-size: 18px;
`




export const HelpfulCont = styled.div`
    width: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3px;
`

export const HelpfulCount = styled.div`
    width: 45px;
    height: 23px;
    color: #00578B;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
`


export const DefaultLine = styled.div`
    width: 76px;
    height: 3px;
    background-color: rgba(0,0,0,0.5);
`

export const PercentageLine = styled.div<PercentageLineProps>`
    width: ${({percentage}) => percentage}%;
    height: 100%;
    background-color:#00578b;
`

export const ViewsCont = styled.div`
`

export const DateCount = styled.p`
    font-family: r;
    font-style: italic;
    font-size: 12px;
    color:lightgray;    
`
