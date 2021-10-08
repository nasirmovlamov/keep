import React, { Component } from 'react'
import PageTabs from '../../../components/ForumPageTabs'
import MainPartOfPage from '../../../components/MainPartOfPage'
import PageFilters from '../../../components/PageFilters'
import SidePartOfPage from '../../../components/SidePartOfPage'
import StarCountShow from '../../../components/StarCountShow'
import { ProductTag } from '../../../styles/components/styled-elements/ListingStoreProduct.styled'
import { ForumPage, StorePage } from '../../../styles/global/styled-utils/styling-elements/Pages.style'
import { PageDefaultStyle } from '../../../styles/pages/Page.styled'
import { SingleProductMiddle } from '../../../styles/pages/SingleQuestionPage.styled'
import { Flexer, StoreTop, StoreTopAvatar, StoreTopCodeLines, StoreTopContent, StoreTopImg, StoreTopImgCont, StoreTopPrice, StoreTopRatingBought, StoreTopRatingCont, StoreTopRatingStars, StoreTopTags, StoreTopTitle } from '../../../styles/pages/Store.styled'

interface Props {
    
}
interface State {
    
}

class SingleProductPage extends Component<Props, State> {
    state = {}

    render() {
        return (
            <PageDefaultStyle>
            <SidePartOfPage side={"left"}>
                
            </SidePartOfPage>

            <MainPartOfPage>
                <StorePage>
                    <StoreTop>
                        <Flexer>
                            <StoreTopImgCont>
                                <StoreTopImg>
                                    <StoreTopAvatar></StoreTopAvatar>
                                    <StoreTopCodeLines>
                                        <p>Python</p>
                                        <p>17 lines</p>
                                    </StoreTopCodeLines>


                                </StoreTopImg>
                                
                            </StoreTopImgCont>




                            <StoreTopContent>
                                <StoreTopTitle>Sorting dates of dd/mm/yyyy</StoreTopTitle>
                                <StoreTopRatingCont>
                                    <StoreTopRatingStars><StarCountShow count={5.3}/> 621</StoreTopRatingStars>
                                    <StoreTopRatingBought>bought 381</StoreTopRatingBought>
                                </StoreTopRatingCont>
                                <StoreTopPrice>2.89$</StoreTopPrice>
                            </StoreTopContent>
                        </Flexer>
                        
                        <StoreTopTags>
                            <ProductTag>css</ProductTag>
                            <ProductTag>cross-browser</ProductTag>
                            <ProductTag>highlight</ProductTag>
                            <ProductTag>text-selection</ProductTag>
                        </StoreTopTags>
                    </StoreTop>






                </StorePage>
            </MainPartOfPage>

            <SidePartOfPage side={"right"}>
                
            </SidePartOfPage>
        </PageDefaultStyle>
        )
    }
}

export default SingleProductPage
