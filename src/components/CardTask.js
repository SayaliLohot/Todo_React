
import React, { useState } from "react";
import { LuEdit } from 'react-icons/lu';
import { AiOutlineDelete } from 'react-icons/ai';
import EditTask from '../modals/EditTask'

function CardTask({taskObj, index , deleteTask, updateListArray}) {
    const[editModal, setEditModal] = useState(false)
  
    const editToggle = () => {
      setEditModal(!editModal);
    };
  
    // delete task call
    const handleDelete = ()=>{
      deleteTask(index)
    }
  
  
    //update Task call
  const updateTask = (obj)=>{
    updateListArray(obj, index)
  }
  
  
    return (
      <div className="card-wrapper mr-5" key={index}>
      <div className="task-holder">
        <h3 className="card-header">{taskObj.Name}</h3>
        <p className="mt-3 Description">Description: {taskObj.Description}</p>
        <p className="mt-3">Status: {taskObj.Status}</p>
      </div>
  
        <div className="icons-container">
          <LuEdit style={{"cursor":"pointer"}} onClick={()=>setEditModal(true)}/>
          <AiOutlineDelete style={{"cursor":"pointer"}} onClick={handleDelete}/>
       </div>
  
       <EditTask editModal={editModal} editToggle={editToggle} updateTask={updateTask} taskObj={taskObj}/>
  
    </div>
    )
  }
  export default CardTask