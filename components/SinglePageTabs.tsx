import React, { ReactElement, useEffect, useState } from 'react'
import { SingleLine,  SingleTabButton, SingleTabs, SingleTabsContainer, SingleTabTags, SingleTabTagsCont, SingleTabText } from '../styles/components/styled-elements/SinglePageTabs.styled'


interface Props {
    pageTabs:{
        tabs:[{tabName:string}]
    }
}

function SinglePageTabs({pageTabs}: Props): ReactElement {


    

    return (
        <SingleTabsContainer>
            {/* <SingleTabs>

                {   
                    pageTabs.tabs.map(
                        tabs => 
                        <SingleTabButton >
                            <SingleTabText  >{tabs.tabName}</SingleTabText> 
                            <SingleLine />        
                        </SingleTabButton>
                    
                    )
                }
                
                
            </SingleTabs> */}

            
        </SingleTabsContainer>  
    )
}

export default SinglePageTabs
