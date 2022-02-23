import React ,{useState,useEffect}from 'react'
import {v4 as uuidv4} from "uuid"

const Taskform=(props)=> {
    const {formSubmit,isSaved, toggleIsSaved,id:slNo, title:taskTitle, status:taskStatus}=props
    const [id,setId]=useState(slNo ?  slNo : uuidv4())
    const [title,setTitle]=useState(taskTitle ? taskTitle :"")
    const [status,setStatus]=useState(taskStatus ? taskStatus : false)

    useEffect(()=>{// form reset
        if(isSaved){
            setId(uuidv4())
            setTitle("")
            setStatus(false)
            toggleIsSaved()
        }
    },[isSaved])


    const handleTitleChange=(e)=>{
        setTitle(e.target.value)
    }

    const handleStatusChange=(e)=>{
        setStatus(e.target.checked)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        const formData={
            id:id,
            title:title,
            status:status
        }
        console.log(formData)
        formSubmit(formData)
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <label>Title</label><br/>
        <input type="text" 
         value={title}
         onChange={handleTitleChange}>
        </input><br/>

        <input type="checkbox"  
        checked={status } 
        onChange={handleStatusChange}/>
        completed
        <br/>

        <input
        type="submit" 
        value="save"
        />

    </form>
    </div>
  )
}

export default Taskform