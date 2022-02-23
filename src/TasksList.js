
import React from 'react'
import TaskItem from "./TaskItem"
const  TasksList=(props)=> {
    const {tasks, removeItem,editItem}=props
  return (
    <div>
       {tasks.length === 0 ? (
           <div>
            <h2>No Tasks found</h2>
           <p>Add your First Task</p>
           </div>
       ): 
       (<div>
           <h2>My tasks -{tasks.length}</h2>
           {
             tasks.map((task)=>{
               return(
                 <TaskItem 
                 key={task.id} 
                 {...task}
                 removeItem={removeItem}
                 editItem={editItem}
                 />
               )
             })
           }
        </div>
       )}

    </div>
  )
}

export default TasksList