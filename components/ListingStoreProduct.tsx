import React, { ReactElement} from 'react'
import Image from 'next/image'
import { AnswerCount,  Avatar, BottomSide, Content,  FormQuestionCont, Name, PersonCont, QuestionTags, StatisticCont, Tags, TextCont, Title, Text, HelpfulCont, HelpfulCount, AnswerCont, ViewsCont,  } from '../styles/components/styled-elements/FormQuestion.style'
import { AddCave, Language, LanguageInfo, LinesofCode, ProductContent, ProductContentCont, ProductDetailCont,  ProductImageAndContent, ProductLanguageAndImage, ProductPerson, ProductPriceCont, ProductSoldCont, ProductStarCont, ProductTag, ProductTags, ProductTitle, StoreListingProductStyle } from '../styles/components/styled-elements/ListingStoreProduct.styled'

interface Props {
    data:{
        avatar:string,
        programingLanguage:string
        lineCount:string
        name:string
        starCount:string 
        soldCount:string
        price:string
        tags:string[]

    }
}

function ListingStoreProduct({data}: Props): ReactElement {
    
    
    return (
        <StoreListingProductStyle>

            <ProductImageAndContent>
                <ProductLanguageAndImage>
                    <ProductPerson src={data.avatar}/>
                    <LanguageInfo>
                        <Language>{data.programingLanguage}</Language>
                        <LinesofCode>{data.lineCount}</LinesofCode>
                    </LanguageInfo>
                </ProductLanguageAndImage>


                <ProductContentCont>
                    <ProductContent>
                        <ProductTitle>{data.name}</ProductTitle>
                        <ProductDetailCont>
                            <ProductStarCont>star {data.starCount}</ProductStarCont>
                            <ProductSoldCont>sold {data.soldCount}</ProductSoldCont>
                        </ProductDetailCont>
                        <ProductPriceCont>{data.price}$</ProductPriceCont>
                    </ProductContent>
                    <AddCave>Add to Cave</AddCave>

                </ProductContentCont>
            </ProductImageAndContent>

            <ProductTags>
                {data.tags.map((tag , index) => index < 3 && <ProductTag>{tag}</ProductTag>)}
            </ProductTags>
        </StoreListingProductStyle> 
    )
}

export default ListingStoreProduct

