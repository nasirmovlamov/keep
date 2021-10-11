import styled from 'styled-components';


export const StorePage = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    row-gap: 20px;
    padding-bottom: 50px;
    padding-top: 50px;
    box-sizing: border-box;
`
export const StoreTop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 11px;
`

export const StoreTopImgCont = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
    padding: 3px;
    background-color: #d649ca;
    width: 238px;
    height: 137px;
    border-top-right-radius: 17px;
    border-bottom-left-radius: 4px;
    overflow: hidden;
`


export const StoreTopImg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0px;
    left: 0px;
`
export const StoreTopAvatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    background-color: green;
    top:0px;
    right: 0px;

`
export const StoreTopCodeLines = styled.div`
    position: absolute;
    z-index: 2;
    bottom:0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    p
    {
        color: white;
        font-size: 12px;
        font-family: s;
    }
`

export const StoreTopContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 3px;
`
export const StoreTopTitle = styled.h2`
    
`
export const Flexer = styled.div`
    display: flex;
    column-gap: 18px;
`
export const StoreTopRatingCont = styled.div`
    display: flex;
    column-gap: 10px;
`
export const StoreTopRatingStars = styled.div`
    display: flex;
`
export const StoreTopRatingBought = styled.div`
    display: flex;
`
export const StoreTopPrice = styled.div`
    display: flex;
    font-size: 25px;
`

export const StoreTopTags = styled.div`
    display: flex;
    column-gap: 9px;
`

export const ProductTag = styled.div`
    height: 22px;
    color: white;
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
    background-color: #e5f0f4;
    font-family: r;
    font-size: 12px;
    text-decoration: none solid rgb(0, 87, 139);
    text-align: center;
    
`






export const LabelCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    margin-top: 10px;
`

export const LabelKey = styled.h3`
    font-size: 25px;
    color: #032728;
`

export const LabelContent = styled.p`
    text-align: justify;
    font-size: 18px;
    color: #032728;

`

export const ClipsCont = styled.p`
    display:flex;
    height: 329px;
    width: 100%;
    flex-direction: column;
    row-gap: 10px;
`
export const ClipTitle = styled.h3`
    font-size: 25px;
    color: #032728;
`
export const ClipBody = styled.div`
    display: flex;
    justify-content: space-between;
`
export const MainClip = styled.div`
    height: 100%;
    background-color: gray;
    width: 532px;
`
export const SideClips = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 138px;
    row-gap: 10px;

`
export const SideClip = styled.div`
    width: 135px;
    height: 84px;
    background-color: gray;
`


export const StoreForumCont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

export const StoreForumTitle = styled.h3`
    font-size: 25px;
    color: #032728;
`

export const StoreForumBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`


export const StoreDiscussionCont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

export const StoreDiscussionTitle = styled.h3`
    font-size: 25px;
    color: #032728;
`

export const StoreDiscussionBody = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
`