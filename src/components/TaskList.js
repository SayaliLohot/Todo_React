import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Header from './Header'
import CardTask from './CardTask'
function TaskList() {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

//showing data from local storage
  useEffect(() => {
    let arr = localStorage.getItem("newTask");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  //save array of new task
  const SaveChange = (taskObj) => {
    let newTask = taskList;
    newTask.push(taskObj);
    localStorage.setItem("newTask", JSON.stringify(newTask));
    setTaskList(newTask);
    setModal(false);
  };

  //create task modal toggling
  const toggle = () => {
    setModal(!modal);
  };


    //delete task
    const deleteTask =(index)=>{
      let newTask = taskList;
        newTask.splice(index,1)
        localStorage.setItem("newTask", JSON.stringify(newTask));
        setTaskList(newTask)
        window.location.reload()
    }

    //update Task 
    const updateListArray = (obj, index) => {
      let newTask = taskList
      newTask[index] = obj
      localStorage.setItem("newTask", JSON.stringify(newTask))
      setTaskList(newTask)
      window.location.reload()
  }

  return (
    <div>
      <Header/>
     <div className="create-btn-container"> 
     <button className="btn btn-primary mt-2 create-task" onClick={() => setModal(true)}>
      Create task
    </button>
     </div>

      <div className="task-container ">
        {taskList &&
          taskList.map((taskObj, index) => <CardTask taskObj={taskObj} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>)}
      </div>
      <CreateTask modal={modal} toggle={toggle} save={SaveChange} />
    </div>
  );
}

export default TaskList;






