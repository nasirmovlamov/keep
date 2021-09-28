import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { useScrollDirection } from 'react-use-scroll-direction'
import { changeModalAction } from '../app/feature/AuthSlice'
import { useAppDispatch } from '../app/store/hooks'
import { AddQuesitionCont, SearchBoxContainer , SearchBoxPage, SearchBoxStyle, SearchCont, SearchInput, SearchNav, SearchNavQuery} from '../styles/components/styled-elements/SearchBox.style'

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
            isScrollingUp && setDirection('up')
        }
    }, [isScrollingDown, isScrollingUp, router.asPath])

    const searchSizechange = (event:string) => {
        if(router.pathname === '/')
        {

            if(event === 'focus')
            {
                // searchBox.style.width = `400px`
                searchContRef.current!.style.paddingTop = `1vh`
                searchNavRef.current!.style.top = `50px`
            }
            if(event === 'blur')
            {
                // searchBox.style.width = `422px`
                searchContRef.current!.style.paddingTop = `20vh`
                searchNavRef.current!.style.top = `0px`
            }
        }
        if(event === 'focus')
        {
            searchNavRef.current!.style.top = `51px`
        }
        if(event === 'blur')
        {
            searchNavRef.current!.style.top = `0px`

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
            <SearchBoxStyle direction={direction} ref={searchBoxRef}> 
                <SearchBoxPage>{pagePath}</SearchBoxPage>
                <SearchCont>
                    <FontAwesomeIcon  icon={faSearch}/>
                    <SearchInput path={router.asPath} placeholder="Search..." ref={searchInputRef} onFocus={() => searchSizechange('focus')} onBlur={() => searchSizechange('blur')}  type="text" /> 
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
        </SearchBoxContainer>
    )
}

export default SearchBox
