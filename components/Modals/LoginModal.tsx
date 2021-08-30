import React, { FormEvent,ReactElement, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/store/hooks';
import * as authThunk from '../../app/thunks/AuthThunk'
import { changeModalAction, loginErrors, login_form, login_Form_OnChange, user_modals } from '../../app/containers/AuthSlice';
interface Props {
}

function LoginModal({}: Props):ReactElement {
    const dispatch = useAppDispatch();
    const errors = useAppSelector(loginErrors);
    const allModals = useAppSelector(user_modals)
    const loginForm = useAppSelector(login_form)
    
    
    const formSubmit = async (e:FormEvent) => {
        e.preventDefault()
        dispatch(authThunk.userLogin(loginForm))
    }

    
    return (
        <div style={{width:"100vw", height:"100vh" ,  display: 'flex', justifyContent: 'center', alignItems: 'center', position:'absolute', background:"rgba(0,0,0,0.5)", left:0,top:0,zIndex:4}}>
            <form style={{background:"rgba(255,255,255,0.7)" , padding:"25px", borderRadius:"20px"}} onSubmit={formSubmit}>
                <div style={{display:'flex',flexDirection:"column",alignItems:'flex-end',marginTop:"0px",marginBottom:"10px"}}>
                    <button type="button" onClick={() => dispatch(changeModalAction('login'))} style={{background:"none",border:"none",cursor:"pointer"}}>X</button>
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <h2>Login</h2>
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <label style={{width:"150px",marginBottom:"10px",alignSelf:"flex-start"}}  htmlFor="">email</label>
                    <input type="email" name="email" value={loginForm.email} onChange={(e)=>dispatch(login_Form_OnChange(e))}/>
                    {(errors !== null && errors !== undefined &&  errors.errors.email !== undefined) && errors.errors.email.map((error , index) => <label style={{color:"red", fontSize:"12px",marginTop:"10px",marginBottom:"10px"}} key={index}>{error}</label>)}
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <label style={{width:"150px",marginBottom:"10px",alignSelf:"flex-start"}}  htmlFor="">password</label>
                    <input type="password" name="password" value={loginForm.password} onChange={(e)=>dispatch(login_Form_OnChange(e))}/>
                    {(errors !== null && errors !== undefined &&  errors.errors.password !== undefined) && errors.errors.password.map((error , index) => <label style={{color:"red", fontSize:"12px",marginTop:"10px",marginBottom:"10px"}} key={index}>{error}</label>)}
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"0px"}}>
                    <button type="submit">Submit</button>
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"5px",marginBottom:"10px"}}>
                    {(errors !== null && errors !== undefined &&  errors.errors.password !== undefined) && <button type="button" style={{color:"red", fontSize:"12px",marginTop:"5px",marginBottom:"5px"}} onClick={()=> dispatch(changeModalAction('forgetPassword'))}>Forget Password</button>}
                </div>
            </form>
        </div>
    )
}

export default LoginModal
