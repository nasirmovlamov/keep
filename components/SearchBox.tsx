import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { changeModalAction } from '../app/feature/AuthSlice'
import { useAppDispatch } from '../app/store/hooks'
import { AddQuesitionCont, SearchBoxContainer , SearchBoxPage, SearchBoxStyle, SearchCont} from '../styles/components/styled-elements/SearchBox.style'

interface Props {
    
}

function SearchBox({}: Props): ReactElement {
    const router = useRouter()
    const [pagePath, setpagePath] = useState("")
    const searchBoxRef = useRef(null)
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


    const searchSizechange = (event:string) => {
        const searchBox = searchBoxRef.current
        if(router.pathname === '/')
        {

            if(event === 'focus')
            {
                searchBox.style.width = `400px`
                searchBox.style.marginTop = `0px`
            }
            if(event === 'blur')
            {
                searchBox.style.width = `422px`
                searchBox.style.marginTop = `200px`
            }
        }

    } 

    const pagePathDetector = (pathname:string) => {
        if(pathname === "/")
        {   
            return "MainPage"
        }
        else if(pathname === "/forum") 
        {
            return "library"
        }
        else 
        {
            return "store"
        }
    }

    return (
        <SearchBoxContainer path={router.asPath}>
            <SearchBoxStyle path={router.asPath} ref={searchBoxRef}> 
                <SearchBoxPage>{pagePath}</SearchBoxPage>
                <SearchCont>
                    <FontAwesomeIcon  icon={faSearch}/>
                    <input ref={searchInputRef} onFocus={() => searchSizechange('focus')} onBlur={() => searchSizechange('blur')}  type="text" /> 
                </SearchCont>
                <AddQuesitionCont onClick={router.asPath === "/forum" ? () => dispatch(changeModalAction("questionCreate")) : ()=>{}}><FontAwesomeIcon icon={faPlus}/></AddQuesitionCont>
            </SearchBoxStyle>
        </SearchBoxContainer>
    )
}

export default SearchBox
