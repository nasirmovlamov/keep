import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { useScrollDirection } from 'react-use-scroll-direction'
import { changeModalAction } from '../app/feature/AuthSlice'
import { useAppDispatch } from '../app/store/hooks'
import { AddQuesitionCont, SearchBoxContainer , SearchBoxPage, SearchBoxStyle, SearchCont} from '../styles/components/styled-elements/SearchBox.style'

interface Props {
    
}

function SearchBox({}: Props): ReactElement {
    const router = useRouter()
    const [pagePath, setpagePath] = useState("")
    const searchBoxRef = useRef(null)
    const searchContRef = useRef(null)
    const searchInputRef = useRef(null)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(router.isReady)
        {
            setpagePath(pagePathDetector(router.asPath))
            if(router.asPath !== '/')
            {
                searchBoxRef.current.style = `position:fixed;`
                searchInputRef.current.focus()
            }
        }
    }, [router])


    const [direction, setDirection] = useState('up')
    const { isScrollingUp, isScrollingDown } = useScrollDirection()



    useEffect(() => {
        if(router.asPath !== '/')
        {
            isScrollingDown && setDirection('down')
            isScrollingUp && setDirection('up')
        }
    }, [isScrollingDown, isScrollingUp])

    const searchSizechange = (event:string) => {
        if(router.pathname === '/')
        {

            if(event === 'focus')
            {
                // searchBox.style.width = `400px`
                searchContRef.current.style.paddingTop = `1vh`
            }
            if(event === 'blur')
            {
                // searchBox.style.width = `422px`
                searchContRef.current.style.paddingTop = `20vh`
            }
        }

    } 

    const pagePathDetector = (pathname:string) => {
        if(pathname === "/")
        {   
            return "Home"
        }
        else if(pathname === "/forum") 
        {
            return "Library"
        }
        else 
        {
            return "Store"
        }
    }

    const SearchContDesign = {
        paddingTop: pagePath === "Home" ? "20vh" : "0vh",
    }
    
    return (
        <SearchBoxContainer ref={searchContRef} path={router.asPath} style={SearchContDesign}>
            <SearchBoxStyle direction={direction} path={pagePath} ref={searchBoxRef}> 
                <SearchBoxPage>{pagePath}</SearchBoxPage>
                <SearchCont>
                    <FontAwesomeIcon  icon={faSearch}/>
                    <input placeholder="Search..." ref={searchInputRef} onFocus={() => searchSizechange('focus')} onBlur={() => searchSizechange('blur')}  type="text" /> 
                </SearchCont>
                {pagePath !== "Home" && <AddQuesitionCont onClick={router.asPath === "/forum" ? () => dispatch(changeModalAction("questionCreate")) : ()=>{}}>ADD</AddQuesitionCont>}
            </SearchBoxStyle>
        </SearchBoxContainer>
    )
}

export default SearchBox
