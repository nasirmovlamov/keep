import React, {ReactElement, useEffect, useState} from 'react'
import { user_modals } from '../../app/feature/AuthSlice'
import { useAppSelector } from '../../app/store/hooks'
import ForgetPasswordModal from './ForgetPasswordModal'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import IsEmailSendModal from './IsEmailSendModal'
import CreateQuestionModal from './CreateQuestionModal'
import ModalCont from './ModalCont'

interface Props {
}

function Modals({}: Props):ReactElement {
    const allModals = useAppSelector(user_modals)
    
    return (
        <>
            
            {allModals.login && <ModalCont> <LoginModal /></ModalCont>}
            {allModals.register && <ModalCont><RegisterModal /></ModalCont>}
            {allModals.forgetPassword && <ModalCont><ForgetPasswordModal /></ModalCont>}
            {allModals.isEmailSend && <ModalCont><IsEmailSendModal /></ModalCont>}
            {allModals.questionCreate && <ModalCont><CreateQuestionModal /></ModalCont>}        
            
            </>
    )
}

export default Modals
