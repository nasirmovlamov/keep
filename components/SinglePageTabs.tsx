import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useState } from 'react'
import { changeForumTabActive,  page_tabs } from '../app/containers/PageTabsSlice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { SingleLine,  SingleTabButton, SingleTabs, SingleTabsContainer, SingleTabTags, SingleTabTagsCont, SingleTabText } from '../styles/components/styled-elements/SinglePageTabs.styled'


interface Props {

}

function SinglePageTabs({}: Props): ReactElement {
    
    const pageTabs = useAppSelector(page_tabs);
    const router = useRouter()


    return (
        <SingleTabsContainer>
            <SingleTabs>

                {   
                    router.pathname === "/questions/[slug]"
                    ?

                    pageTabs.forumTabs.map( (tabs)=>
                        <Link key={tabs.id} href={`#${tabs.link}`}>
                            <SingleTabButton tabActive={tabs.isActive}>
                                <SingleTabText  >{tabs.tabName}</SingleTabText> 
                                <SingleLine />    
                            </SingleTabButton>    
                        </Link>
                    )
                    :
                    pageTabs.productTabs.map( (tabs)=>
                        <Link key={tabs.id} href={`#${tabs.link}`}>
                            <SingleTabButton tabActive={tabs.isActive}>
                                <SingleTabText  >{tabs.tabName}</SingleTabText> 
                                <SingleLine />    
                            </SingleTabButton>    
                        </Link>
                    )
                }
                
                
            </SingleTabs>

            
        </SingleTabsContainer>  
    )
}

export default SinglePageTabs
