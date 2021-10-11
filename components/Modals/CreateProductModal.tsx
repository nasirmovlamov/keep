import React, { ReactElement, useEffect, useState } from 'react'
import { changeModalAction } from '../../app/feature/UserSlice'
import { useAppDispatch } from '../../app/store/hooks'
import {BASE_API_INSTANCE} from '../../helpers/api/BaseInstance'
import { accessToken } from '../../helpers/token/TokenHandle'
import { getKeyValue } from '../../logic/getKeyValue'
import { ProductCreateForm, ProductCreateModal, ProductLabelCont } from '../../styles/components/styled-elements/CreateProductModal.style'
import { Title } from '../../styles/components/styled-elements/FormQuestion.style'
import MyEditor from '../MyEditor'
import { autoErrorToaster } from '../Notify/AutoErrorToaster'
import { autoSuccessToaster } from '../Notify/AutoSuccessToast'
import { errorToastFunc } from '../Notify/ErrorToasts'
import {DragDropContext, Droppable , Draggable} from 'react-beautiful-dnd'

interface Props {
}





function CreateProductModal(this: any, {}: Props): ReactElement {
    const [questionValue, setQuestionValue] = useState({title:"", content:""})
    const [tags, settags] = useState<string[]>([])
    const [category, setCategory] = useState<string>("1")

    interface elementOfList {
        id: number,
        label_key: string
        label_value: string
        isEditor: boolean
        isClips:boolean
    }
    const [elementsOfList, setelementsOfList] = useState<elementOfList[]>([
        {
            id: 1,
            label_key: "Description",
            label_value:"",
            isEditor:true,
            isClips:false,
        },
        {
            id: 2,
            label_key: "Requirements",
            label_value:"",
            isEditor:true,
            isClips:false
        },
      ]
    )



    const dispatch = useAppDispatch()

    const questionChange = (e:any) => {
        setQuestionValue({...questionValue, [e.target.name]:e.target.value})
    }

    const createTag = (event:any) => {
        if(event.code === "Space")
        {
            settags([...tags, event.target.value])
            event.target.value = ""
        }
    }

    const sendCreateQuestionModal = async (e:any) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append("category_id" , category)
            formData.append("title" , questionValue.title)
            formData.append("content" , questionValue.content)
            formData.append("tags" , JSON.stringify(tags))
            const resp = await BASE_API_INSTANCE.post("/forum/create", formData) 
            autoSuccessToaster(resp.data.message)
        } catch (error:any) {
            autoErrorToaster(error.response.data)
        }
    }



  function handleOnDragEnd(result:any) {
    if (!result.destination) return;

    const items = Array.from(elementsOfList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setelementsOfList(items);
  }
    


  
  const updateLabelKey = (index:number , content:any) =>{
      console.log(elementsOfList)
      let oldarray = [...elementsOfList]
      oldarray[index].label_key = content
      setelementsOfList([...oldarray])
    }
    
    const updateEditorValue = (index:number , content:any) =>{
        let oldarray = [...elementsOfList]
        oldarray[index].label_value = content
        setelementsOfList([...oldarray])
    }

    const addNewBlock = (index:number , content:any) =>{
        setelementsOfList([...elementsOfList , {id:elementsOfList.length + 1 , label_key:"Header" , label_value:"" , isEditor:true , isClips:false}])
    }

    const deleteBlock = (index:number) =>{
        let oldarray = [...elementsOfList]
        oldarray.splice(index, 1)
        setelementsOfList([...oldarray])
    }

    return (
        <ProductCreateModal>
            <ProductCreateForm onSubmit={sendCreateQuestionModal}>
                <div style={{display:'flex',flexDirection:"column",alignItems:'flex-end',marginTop:"0px",marginBottom:"10px"}}>
                    <button type="button" onClick={() => dispatch(changeModalAction('productCreate'))} style={{background:"none",border:"none",cursor:"pointer"}}>X</button>
                </div>

                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="characters">
                        {(provided) => (
                            <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                {elementsOfList.map(({id , label_key , label_value , isEditor , isClips}:elementOfList, index) => {
                                    return (
                                        <Draggable key={id} draggableId={id.toString()} index={index}>
                                            {(provided) => (
                                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <ProductLabelCont key={id}>
                                                        <button type='button' onClick={()=>deleteBlock(index)}>x</button>
                                                        <input type='text' value={label_key} onChange={(e:any) => updateLabelKey(index, e.target.value)} />
                                                        {isEditor && <MyEditor content={label_value}  onChange={(content:any) => updateEditorValue(index , content)}/>}
                                                        <label htmlFor="title">validate</label>
                                                    </ProductLabelCont>
                                                </li>
                                            )}
                                        </Draggable>
                                    );
                                })}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
                {/* <ProductLabelCont>
                    <input type='text' defaultValue={"Description"} />
                    <MyEditor content={questionValue} onChange={(code:any) => setQuestionValue(code)}/>
                    <label htmlFor="title">validate</label>
                </ProductLabelCont>

                <ProductLabelCont>
                    <input type='text' defaultValue={"Aplicability"} />
                    <MyEditor content={questionValue} onChange={(code:any) => setQuestionValue(code)}/>
                    <label htmlFor="title">validate</label>
                </ProductLabelCont> */}


                

                


                
                <button type="button" onClick={addNewBlock}>add new block</button>
                <button type="submit">Post</button>
            </ProductCreateForm>
        </ProductCreateModal>
    )
}

export default CreateProductModal
