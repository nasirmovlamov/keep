import React, { ReactElement, useEffect, useState } from 'react'
export interface ToastProps extends ToastOptions {}

function ToasterCont({}: Props): ReactElement {
    }

    return (
        <ToastItem key={element.id}>
            <ToastIcon></ToastIcon>
            <ToastContent>This is test content {element.id}.</ToastContent>
            <ToastDeleteButton onClick={()=> clean_toast(element.id)}>x</ToastDeleteButton>
        </ToastItem>)
    )
}

export default ToasterCont
