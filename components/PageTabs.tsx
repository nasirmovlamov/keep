import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useState } from 'react'
import { FooterColumn,  FooterElement,  FooterRow, FooterStyle } from '../styles/components/styled-elements/Footer.style'
import { Line, TabButton, Tabs, TabsContainer, TabTags, TabTagsCont, TabText } from '../styles/components/styled-elements/PageTabs.style'

interface Props {
    
}

function PageTabs({}: Props): ReactElement {
    const router = useRouter()
    const {selectedTab , selectedTag} = router.query


    const tabQuery = (tab="default" , tag="default") => {
        if(tab!== "default")
        {
            router.push({
                pathname:router.pathname,
                query:{
                    selectedTab:tab,
                    selectedTag:selectedTag
                }
            })

        }
        else if(tag!== "default")
        {
            router.push({
                pathname:router.pathname,
                query:{
                    selectedTab:selectedTab,
                    selectedTag:tag
                }
            })
        }
        else 
        {}

    }

    

    return (
        <TabsContainer>
            <Tabs>
                <TabButton tabFocus={selectedTab === "Info" ? true: false} name="tab"  onClick={() => tabQuery("Info" , "default")}>
                    <TabText>Info</TabText> 
                    <Line />     
                </TabButton>

                <TabButton tabFocus={selectedTab === "Clip" ? true: false} name="tab" onClick={() => tabQuery("Clip", "default")}>
                    <TabText  >Clip</TabText> 
                    <Line />        
                </TabButton>
                
                <TabButton tabFocus={selectedTab === "Forum" ? true: false} name="tab" onClick={() => tabQuery("Forum", "default")}>
                    <TabText >Forum</TabText> 
                    <Line  />   
                </TabButton>
                
                <TabButton tabFocus={selectedTab === "Review" ? true: false} name="tab"  onClick={() => tabQuery("Review", "default")}>
                    <TabText  >Review</TabText> 
                    <Line /> 
                </TabButton>
                
                <TabButton tabFocus={selectedTab === "Other" ? true: false}  name="tab"  onClick={() => tabQuery("Other", "default")}>
                    <TabText>Other</TabText> 
                    <Line /> 
                </TabButton>
            </Tabs>

            <TabTagsCont>
                <TabTags name="tag" tagFocus={selectedTag === "Newes" ? true: false} onClick={() => tabQuery("default" , "Newes")}>Newes</TabTags>
                <TabTags name="tag" tagFocus={selectedTag === "Most Visited" ? true: false} onClick={() => tabQuery("default" , "Most Visited")}>Most Visited</TabTags>
                <TabTags name="tag" tagFocus={selectedTag === "Most Helpful" ? true: false} onClick={() => tabQuery("default" , "Most Helpful")}>Most Helpful</TabTags>
                <TabTags name="tag" tagFocus={selectedTag === "Recently" ? true: false} onClick={() => tabQuery("default" , "Recently")}>Recently</TabTags>
            </TabTagsCont>
        </TabsContainer>   
    )
}

export default PageTabs
