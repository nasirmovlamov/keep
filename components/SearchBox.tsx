import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { useScrollDirection } from 'react-use-scroll-direction'
import { changeModalAction } from '../app/feature/AuthSlice'
import { useAppDispatch } from '../app/store/hooks'
import { forumWordRegex, storeWordRegex } from '../logic/regex/NavbarRegex'
import { AddQuesitionCont, SearchBoxContainer , SearchBoxPage, SearchBoxStyle, SearchBoxThunk, SearchBoxThunkAndCont, SearchCont, SearchInput, SearchNav, SearchNavQuery} from '../styles/components/styled-elements/SearchBox.style'
import { MainPartOfPageStyle, SidePartOfPageStyle } from '../styles/pages/Page.styled'

interface Props {
    
}

function SearchBox({}: Props): ReactElement {
    const router = useRouter()
    const [pagePath, setpagePath] = useState("")
    const searchBoxRef = useRef<HTMLDivElement>(null)
    const searchContRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)
    const searchNavRef = useRef<HTMLDivElement>(null)
    const dispatch = useAppDispatch()
    const [searchValue, setSearchValue] = useState("")

    const changeSearchValue = (e:string) => {
        setSearchValue(e)
        searchNavRef.current!.style.top = (router.asPath === "/" ? `65px` : "51px")
        if(router.pathname === '/')
        {
            searchNavRef.current!.style.top = `66px`
        }
    }



    useEffect(() => {
        if(router.isReady)
        {
            setpagePath(pagePathDetector(router.asPath))
            if(router.asPath !== '/')
            {
                searchBoxRef.current!.setAttribute("style" , "position:fixed;")
                searchInputRef.current!.focus()
            }
        }
    }, [router])


    const [direction, setDirection] = useState('up')
    const { isScrollingUp, isScrollingDown } = useScrollDirection()



    useEffect(() => {
        if(router.asPath !== '/')
        {
            isScrollingDown && setDirection('down')
        }
    }, [isScrollingDown,  router.asPath])

    const searchSizechange = (event:string) => {
        if(router.pathname === '/')
        {

            if(event === 'focus')
            {
                searchContRef.current!.style.paddingTop = `1vh`
                searchNavRef.current!.style.top = `65px`
                return 0
            }
            if(event === 'blur')
            {
                searchContRef.current!.style.paddingTop = `20vh`
                searchNavRef.current!.style.top = `0px`
            }
        }
       
        if(event === 'blur')
        {
            searchNavRef.current!.style.top = `0px`
            return 0
        }

    } 

    const pagePathDetector = (pathname:string) => {
        if(pathname === "/")
        {   
            return "Home"
        }
        else if(forumWordRegex.test(pathname)) 
        {
            return "Library"
        }
        else if(storeWordRegex.test(pathname))
        {
            return "Store"
        }
        else 
        {
            return ""
        }
    }

    const SearchContDesign = {
        paddingTop: pagePath === "Home" ? "20vh" : "0vh",
    }
    
    return (
        <SearchBoxContainer ref={searchContRef} path={router.asPath} style={SearchContDesign}>
            <>
                <div style={{width:"400px"}}></div>
                <div style={{width:"808px"}}>
                    <SearchBoxThunkAndCont  ref={searchBoxRef} direction={direction}>
                        <SearchBoxStyle path={router.asPath} direction={direction} > 
                            <SearchBoxPage>{pagePath}</SearchBoxPage>
                            <SearchCont>
                                <FontAwesomeIcon  icon={faSearch}/>
                                <SearchInput value={searchValue} onChange={(e) => changeSearchValue(e.target.value)}  path={router.asPath} placeholder="Search..." ref={searchInputRef} onFocus={() => searchSizechange('focus')} onBlur={() => searchSizechange('blur')}  type="text" /> 
                                <SearchNav  path={router.asPath} ref={searchNavRef}>
                                    <SearchNavQuery>
                                        <FontAwesomeIcon  icon={faSearch}/>
                                        <span>react</span>
                                    </SearchNavQuery>
                                    <SearchNavQuery>
                                        <FontAwesomeIcon  icon={faSearch}/>
                                        <span>react</span>
                                    </SearchNavQuery>
                                </SearchNav>
                            </SearchCont>
                            {pagePath !== "Home" && <AddQuesitionCont onClick={router.asPath === "/forum" ? () => dispatch(changeModalAction("questionCreate")) : ()=>{}}>ADD</AddQuesitionCont>}
                        </SearchBoxStyle>
                        {pagePath !== "Home" &&<SearchBoxThunk onMouseMove={()=>setDirection("up")} direction={direction}>	• 	•	•</SearchBoxThunk>}
                    </SearchBoxThunkAndCont>
                </div>
                <div style={{width:"400px"}}></div>

            </>
        </SearchBoxContainer>
    )
}

export default SearchBox
