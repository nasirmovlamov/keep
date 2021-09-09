import axios from 'axios'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useState } from 'react'
import { BASE_API_URL } from '../../../../helpers/urls/BASE_URL'

interface Props {
    
}

function EMAIL_VERIFY({}: Props): ReactElement {
    const router = useRouter()
    const [status, setstatus] = useState<"idle" | "loading" | "error">("loading")
    const [errors, seterrors] = useState([])
    const [message, setmessage] = useState('')

    const makeVerify = async () => {
        try {
            const resp = await axios.get(`${BASE_API_URL}${router.asPath}` ,  {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            setmessage(resp.data.message)
            setstatus("idle")
        } catch (error) {
            setstatus("error")
            seterrors(error.response.data.errors.user)
        }
    }
    
    useEffect(() => {
        if(router.query.id !== undefined)
        {
            makeVerify()
        }
    }, [router])

    if(status ==="loading")
    {
        return <div style={{color:"white", display:"flex",justifyContent:"center", marginTop:"50px",marginBottom:"50px"}}>loading</div>
    }
    else if(status === "error")
    {
        return <div>{errors.map(errors => <p style={{color:"white", display:"flex",justifyContent:"center", marginTop:"50px",marginBottom:"50px"}}>{errors}</p>)}</div>
    }
    else 
    {
        return (
            <div style={{color:"white", display:"flex",justifyContent:"center", marginTop:"50px",marginBottom:"50px"}}>{message}</div>
        )   

    }
}

export default EMAIL_VERIFY
