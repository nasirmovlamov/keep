import React, { ReactElement, useState } from 'react'

interface Props {
    
}

function LoginModal({}: Props):ReactElement {
    

    return (
        <div style={{width:"100vw", height:"100vh" , display: 'flex', justifyContent: 'center', alignItems: 'center', position:'absolute', background:"rgba(0,0,0,0.5)", left:0,top:0,zIndex:4}}>
            <form action="">
                <div style={{display:'flex',flexDirection:"column",alignItems:'flex-end',marginTop:"20px",marginBottom:"10px"}}>
                    <button>X</button>
                </div>
                <div>
                    <h2>Login</h2>
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <label style={{width:"150px",marginBottom:"10px",alignSelf:"flex-start"}}  htmlFor="">email/username</label>
                    <input type="email" />
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <label style={{width:"150px",marginBottom:"10px",alignSelf:"flex-start"}}  htmlFor="">password</label>
                    <input type="password" />
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default LoginModal
