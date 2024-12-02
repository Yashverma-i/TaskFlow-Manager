import React,{useState,useContext} from 'react'
import { AuthContext } from '../../context/AuthProvide'

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext)

  const [taskTitle,setTaskTitle ]= useState('')
  const [taskDescription,setTaskDescription] =useState('')
  const [taskDate,setTaskDate] =useState('')
  const [assignTo,setAssignTo] =useState('')
  const [category,setCategory] =useState('')

  const [newTask,setNewTask] =useState({})
 
  const sumbitHandler=(e)=>{
    e.preventDefault()

    const newTask= {taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false};
    
    const data = userData

    data.forEach(function(elem){
      if(assignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskCount.new  =elem.taskCount.new +1;
      }
    })
  
    setUserData(data)
    console.log(userData)

    setTaskTitle('');
    setTaskDate('')
    setTaskDescription('')
    setAssignTo('')
    setCategory('')
  }

  return (
    <div className='py-2 container rounded-4' style={{
    backgroundColor: 'rgb(28, 49, 64)', minHeight:'50vh'
    }}>
      <form onSubmit={(e)=>{
         sumbitHandler(e)
      }}>
      <div className='row px-lg-3 row-cols-lg-2 row-cols-md-1 row-cols-sm-1'>

        <div className='col pt-1'>
        <h4>Task Title:</h4>
        <input value={taskTitle}
        onChange={(e) =>{
          setTaskTitle(e.target.value)
        }}
         className='rounded-3 w-75 border-2 mb-2 p-1 bg-transparent' type="text" placeholder='Make UI Design' required />
        <h4>Date:</h4>
        <input value={taskDate}
        onChange={(e) =>{
          setTaskDate(e.target.value)
        }}
         className='rounded-3 w-75 border-2 mb-2 p-1 bg-transparent' type="date" placeholder='dd/mm/yyyy' required />
        
        <h4>Assigned To:</h4>
        <input value={assignTo}
        onChange={(e) =>{
          setAssignTo(e.target.value)
        }}
          className='rounded-3 w-75 border-2 mb-2 p-1 bg-transparent' type="text" placeholder='Employee name' required />

        <h4>Category:</h4>
        <input value={category}
        onChange={(e) =>{
          setCategory(e.target.value)
        }}
         className='rounded-3 w-75 border-2 mb-2 p-1 bg-transparent' type="text" placeholder='design, dev, etc' required />
        </div>

        <div className='col  pt-3'>
          <h4>Description:</h4>
          <textarea  value={taskDescription}
        onChange={(e) =>{
          setTaskDescription(e.target.value)
        }}
           className='rounded-3 border-2 mb-3 p-1 bg-transparent w-75' rows='8' placeholder='describe the project task' required />
          <button className='w-75 bg-primary rounded-4 mx-2 py-2 mb-3'>Create Task</button>
        </div>

        </div>
      </form>
    </div>
  )
}

export default CreateTask
