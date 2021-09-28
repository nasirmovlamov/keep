import React, { ReactElement, FC, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'


interface Props {
    // any props that come into the component
    href:string
}


const NavLink: FC<Props> = ({ children, ...props }) => {
    
    return(
        <Link href={props.href} passHref>
            {children}
        </Link>
    )

};

export default NavLink