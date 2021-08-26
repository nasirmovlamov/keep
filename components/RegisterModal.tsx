import React, { FormEvent, ReactElement, useEffect, useState } from 'react'
import * as authThunk from '../app/thunks/AuthThunk'
import { useAppSelector, useAppDispatch } from '../app/store/hooks';
import axios from 'axios';
import { userErrors } from '../app/containers/AuthSlice';

interface Props {
    
}

function RegisterModal({}: Props):ReactElement {
    const dispatch = useAppDispatch();
    const registerErrors = useAppSelector(userErrors);
    
    const [registerForm, setRegisterForm] = useState({email:"test1@gmail.com", name:"test1@gmail.com", password:"test1@gmail.com"})
    
    const formChange = (e:any) => {
        setRegisterForm({...registerForm, [e.target.name]:e.target.value})
    }

    const formSubmit = (e:FormEvent) => {
        e.preventDefault()
        try {
            dispatch(authThunk.userRegister(registerForm))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log(registerErrors)
    }, [])

    return (
        <div style={{width:"100vw", height:"100vh" , display: 'flex', justifyContent: 'center', alignItems: 'center', position:'absolute', background:"rgba(0,0,0,0.5)", left:0,top:0,zIndex:5}}>
            <form onSubmit={formSubmit} style={{}}>
                <div style={{display:'flex',flexDirection:"column",alignItems:'flex-end',marginTop:"20px",marginBottom:"10px"}}>
                    <button type="button" style={{background:"none",border:"none",cursor:"pointer"}}>X</button>
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <h2>Register {registerErrors?.email}</h2>
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <label style={{width:"150px",marginBottom:"10px",alignSelf:"flex-start"}} htmlFor="">username</label>
                    <input name="name" value={registerForm.name} onChange={formChange} type="username" />
                    {(registerErrors !== null && registerErrors !== undefined && registerErrors.email !== undefined) && registerErrors.email.map(error => <label>{error}</label>)}
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}> 
                    <label style={{width:"150px",marginBottom:"10px",alignSelf:"flex-start"}} htmlFor="">email</label>
                    <input name="email" value={registerForm.email} onChange={formChange} type="email" />
                    {(registerErrors !== null && registerErrors !== undefined &&  registerErrors.name !== undefined) && registerErrors.name.map(error => <label>{error}</label>)}
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <label style={{width:"150px",marginBottom:"10px",alignSelf:"flex-start"}} htmlFor="">password</label>
                    <input name="password" value={registerForm.password} onChange={formChange} type="password" />
                    {(registerErrors !== null && registerErrors !== undefined &&  registerErrors.password !== undefined) && registerErrors.password.map(error => <label>{error}</label>)}
                </div>
                <div style={{width:"100%", display:'flex',justifyContent:'center',marginTop:"20px"}}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterModal
