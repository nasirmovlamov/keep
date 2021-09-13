import React, { ReactElement, useEffect, useState } from 'react'
import { errorToast } from '../app/containers/AppSlice'
import { user_data } from '../app/containers/AuthSlice'
import { comments,   comments_types } from '../app/containers/CommentsSlice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { addAnswerComment, addQuestionComment } from '../app/thunks/CommentsThunk'
import { AllCommentsCont, CommentChangeContent, CommentsForm, CommentsTabMainNameStyle, CommentsTabStyle, CommentsTabTitleStyle, CommentStyle, PostComment  } from '../styles/components/styled-elements/CommentsTab.style'
import { errorToastFunc } from './Notify/ErrorToasts'

interface Props {
}


function CommentModal({}: Props): ReactElement {
    const [newComment, setNewComment] = useState("")
    const commentsType = useAppSelector(comments_types)
    const Comments = useAppSelector(comments)
    const userData = useAppSelector(user_data)
    const dispatch = useAppDispatch()
    if(commentsType === null)
    {
        return <></>
    }

   

    const submitComment = (e:any) => {
        e.preventDefault()
        const comment={
            parent_id: commentsType.id,
            content: newComment
        }
        if(userData === null)
        {
            errorToastFunc("top-right","Login your account.")
            return 0 
        }

        if(commentsType.type === "answer")
        {
            dispatch(addAnswerComment(comment))
        }
        else if(commentsType.type === "question")
        {
            dispatch(addQuestionComment(comment))
        }
        setNewComment("")
    }

    return (
        <div>

            {
                commentsType.type !== null  && 
                <CommentsTabStyle>
                    <CommentsTabMainNameStyle>{commentsType.user.name} </CommentsTabMainNameStyle>
                    <AllCommentsCont>
                        {Comments.map(comment => <CommentStyle>{comment.content}</CommentStyle>)}
                    </AllCommentsCont>

                    <CommentsForm onSubmit={submitComment}>
                        <CommentChangeContent onChange={(e)=> setNewComment(e.target.value)} placeholder="add comment"></CommentChangeContent>
                        <PostComment type="submit">Add Comment</PostComment>
                    </CommentsForm>
                </CommentsTabStyle>
            }

        </div>
    )
}

export default CommentModal