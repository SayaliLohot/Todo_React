import React from 'react'
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CreateTask({modal, toggle, save}) {
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

    const handleSave =()=>{
        let taskObj = {}
        taskObj.Name = taskName
        taskObj.Description =description
        taskObj.Status = status
        save(taskObj)
    }
  return (
<div>
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Add task</ModalHeader>
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
            <Button color="primary" onClick={handleSave}>Add</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
  )
}

export default CreateTask