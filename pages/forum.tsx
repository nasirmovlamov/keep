import { useRouter } from 'next/router'
import React, { ReactElement, useEffect } from 'react'
import PageTabs from '../components/PageTabs'
import { TabButton, Tabs, TabsContainer, TabTags, TabTagsCont } from '../styles/components/styled-elements/PageTabs.style'
import { ForumPage } from '../styles/global/styled-utils/styling-elements/Pages.style'

interface Props {
    
}

function Forum({}: Props): ReactElement {
    const router = useRouter()
    

    return (
        <ForumPage>
            <PageTabs/>         
        </ForumPage>
    )
}

export default Forum
