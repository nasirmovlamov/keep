import React, { ReactElement, useEffect, useState } from 'react'
import * as authThunk from '../app/thunks/AuthThunk'
import { useAppSelector, useAppDispatch } from '../app/store/hooks';

interface Props {
    
}

function RegisterModal({}: Props):ReactElement {
    const dispatch = useAppDispatch();

    const user:{} = {
        name:"test2",
        email:"test2@gmail.com",
        password:"test2"
    }

    useEffect(() => {
        dispatch(authThunk.userRegister(user))
    }, [])

    return (
        <div style={{width:"100vw", height:"100vh" , display: 'flex', justifyContent: 'center', alignItems: 'center', position:'absolute', background:"rgba(0,0,0,0.5)", left:0,top:0,zIndex:5}}>
            <form action="" style={{}}>
                <div style={{display:'flex',flexDirection:"column",alignItems:'flex-end',marginTop:"20px",marginBottom:"10px"}}>
                    <button type="button" style={{background:"none",border:"none",cursor:"pointer"}}>X</button>
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <h2>Register</h2>
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <label style={{width:"150px",marginBottom:"10px",alignSelf:"flex-start"}} htmlFor="">username</label>
                    <input type="username" />
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}> 
                    <label style={{width:"150px",marginBottom:"10px",alignSelf:"flex-start"}} htmlFor="">email</label>
                    <input type="email" />
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <label style={{width:"150px",marginBottom:"10px",alignSelf:"flex-start"}} htmlFor="">password</label>
                    <input type="password" />
                </div>
                <div style={{width:"100%", display:'flex',justifyContent:'center',marginTop:"20px"}}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterModal
