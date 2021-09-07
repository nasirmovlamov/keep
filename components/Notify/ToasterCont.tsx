import React, { ReactElement, useEffect, useState } from 'react'
import { toasts } from '../../app/containers/AuthSlice'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { ToastContent, ToastDeleteButton, ToastIcon, ToastItem, ToastsListTop } from '../../styles/components/styled-elements/ToastCont.style'
import { AnimatePresence } from "framer-motion"
interface Props {
    
}

function ToasterCont({}: Props): ReactElement {
    // const show_toasts = useAppSelector(toasts)
    const [toasts, settoasts] = useState([{id:1} , {id:2} , {id:3} , {id:4}])

    

    const time_clean_toast = () =>{

    }

    const clean_toast = (id:number) => {
        const filterToasts = toasts.filter(element => element.id !== id)
        settoasts(filterToasts) 
    }
    
    const add_toast = () => {
        settoasts([...toasts , {id:toasts.length+1}]) 
    }

    return (
          <div>
              <ToastsListTop>   
                    <button style={{pointerEvents:"all"}} onClick={add_toast}>Add Toast</button>
                <AnimatePresence  initial={false}>
                    {toasts.map(element => 
                        <ToastItem key={element.id}>
                            <ToastIcon></ToastIcon>
                            <ToastContent>This is test content {element.id}.</ToastContent>
                            <ToastDeleteButton onClick={()=> clean_toast(element.id)}>x</ToastDeleteButton>
                        </ToastItem>)
                    }
                </AnimatePresence>
              </ToastsListTop>

              <ul className="bottom"></ul>

              <ul className="right-top"></ul>

              <ul className="left-top"></ul>

              <ul className="right-bottom"></ul>

              <ul className="left-bottom"></ul>

          </div> 
    )
}

export default ToasterCont
