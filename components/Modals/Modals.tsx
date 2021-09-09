import React, {ReactElement, useEffect, useState} from 'react'
import { user_modals } from '../../app/containers/AppSlice'
import { useAppSelector } from '../../app/store/hooks'
import ForgetPasswordModal from './ForgetPasswordModal'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import IsEmailSendModal from './IsEmailSendModal'
import CreateQuestionModal from './CreateQuestionModal'
import CommentModal from './CommentsModal'

interface Props {
}

function Modals({}: Props):ReactElement {
    const allModals = useAppSelector(user_modals)
    
    return (
        <>
            {allModals.login && <LoginModal />}
            {allModals.register && <RegisterModal />}
            {allModals.forgetPassword && <ForgetPasswordModal />}
            {allModals.isEmailSend && <IsEmailSendModal />}
            {allModals.questionCreate && <CreateQuestionModal />}
            {allModals.commentModal && <CommentModal />}
        </>
    )
}

export default Modals
