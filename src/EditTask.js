import React from "react"
import axios from "axios"
import TaskForm from "./Taskform"


const EditTask=(props)=>{
    const {id,title, status,editItem,handleToggle}=props

    const formSubmit=(task)=>{
        axios.put(`http://localhost:3033/api/tasks/${id}`, task)
        .then((response)=>{
            const result=response.data
            editItem(result)
            handleToggle()
        })
        .catch((err)=>{
            alert(err.message)
        })

    }
    return <div>
                <h3>Edit Task</h3>
                <TaskForm
                id={id}
                title={title}
                status={status}
                formSubmit={formSubmit}
                />
            </div>
}

export default EditTask