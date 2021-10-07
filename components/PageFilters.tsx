import React, { ReactElement, useRef } from 'react'
import {  faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { FilterCont, FilterContStyle, FilterLanguageCont, FilterLanguageContent, FilterLanguages, FilterLanguageTitle, FilterTagCont, FilterTagContent, FilterTags, FilterTagTitle, PinButton, SubjectCont, SubjectContent, Subjects, SubjectTitle } from '../styles/components/PageFilters.style'
import { changePositionOfFilters, changeToStayInFocus, is_focused, stay_in_focus } from '../app/feature/PageFiltersSlice'

interface Props {
    
}

function PageFilters({}: Props): ReactElement {

    const isFocused = useAppSelector(is_focused)
    const stayInFocus = useAppSelector(stay_in_focus)
    const dispach = useAppDispatch()
    const filterBlockRef = useRef<HTMLDivElement>(null)


    const pinFilters = () => {
        dispach(changeToStayInFocus(stayInFocus))
    }

    const handleMouseOver = () => {
        if(!stayInFocus)
        {
            dispach(changePositionOfFilters(false))
        }
    }

    const handleMouseLeave = () => {
        if(!stayInFocus)
        {
            dispach(changePositionOfFilters(true))
        }
    }
    const handleStayInFocus = () => {
        
    }
    return (
        <FilterContStyle onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} ref={filterBlockRef}>
            <FilterCont stayInFocus={stayInFocus}  isFocused={isFocused}>
                <PinButton  stayInFocus={stayInFocus} isFocused={isFocused} onClick={pinFilters}><FontAwesomeIcon icon={faThumbtack}/></PinButton>
                <SubjectCont>
                    <SubjectTitle>Subject</SubjectTitle>
                    <SubjectContent>
                        <Subjects>java principles</Subjects>
                        <Subjects>memory</Subjects>
                        <Subjects>performance</Subjects>
                        <Subjects>cpu-architecture</Subjects>
                        <Subjects>arrays</Subjects>
                    </SubjectContent>
                </SubjectCont>

                <FilterTagCont>
                    <FilterTagTitle>Subject</FilterTagTitle>
                    <FilterTagContent>
                        <FilterTags>java principles</FilterTags>
                        <FilterTags>memory</FilterTags>
                        <FilterTags>performance</FilterTags>
                        <FilterTags>cpu-architecture</FilterTags>
                        <FilterTags>arrays</FilterTags>
                    </FilterTagContent>
                </FilterTagCont>

                <FilterLanguageCont>
                    <FilterLanguageTitle>Language</FilterLanguageTitle>
                    <FilterLanguageContent>
                        <FilterLanguages>java</FilterLanguages>
                        <FilterLanguages>javascript</FilterLanguages>
                        <FilterLanguages>c++</FilterLanguages>
                    </FilterLanguageContent>
                </FilterLanguageCont>
            </FilterCont>

        </FilterContStyle>
    )
}

export default PageFilters
