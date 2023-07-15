import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function EditTask({editModal, editToggle, updateTask, taskObj}) {
    const [taskName, setTaskName]=useState('')
    const [description, setDescription]=useState('')
    const [status, setStatus]=useState('')

    const handleOnchange =(e)=>{
        const name = e.target.name
        const value = e.target.value
        if(name==="taskName"){
            setTaskName(value)
        }
        else if (name==="description"){
            setDescription(value)
        }
        else if(name === "status"){
          setStatus(value)
        }
       }
useEffect(()=>{
  setTaskName(taskObj.Name)
  setDescription(taskObj.Description)
  setStatus(taskObj.Status)
}, [])

   const handleUpdate =(e)=>{
      e.preventDefault()
     let newObj = {}
     newObj["Name"] = taskName
    newObj["Description"] = description
    newObj["Status"] = status
    updateTask(newObj)
   }



  return (
<div>

        <Modal isOpen={editModal} editToggle={editToggle} >
          <ModalHeader editToggle={editToggle}>Update task</ModalHeader>
          <ModalBody>
            <form >
                <lable>Title</lable>
                <input type='text' placeholder='type tilte' value={taskName} className='form-control' onChange={handleOnchange} name="taskName"/>
                <lable>Description</lable>
                <textarea cols={5} className='form-control' value={description} onChange={handleOnchange} name="description"></textarea >
                <lable >Status</lable>
                <select className='form-control' name ="status" value={status} onChange={handleOnchange} >
                    <option value={"Todo"} >To Do</option>
                    <option value={"In progress"}>In Progress</option>
                    <option value={"Completed"}>Completed</option>
                </select>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>
            <Button color="secondary" onClick={editToggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
  )
}

export default EditTask