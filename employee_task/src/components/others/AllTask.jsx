import React,{useContext} from 'react'
import { AuthContext } from "../../context/AuthProvide"

const AllTask = () => {

  const [userData,setUserData] = useContext(AuthContext)
  // console.log(authData.employees)

  return (
    <div className='container mt-4 p-3 rounded-3' style={{
     backgroundColor: 'rgb(12, 13, 16)' 
    }}>

   <div className='rounded-3 px-3 my-2 d-flex justify-content-between align-items-center bg-primary border'>
     <h3 className='w-25'>Employee Name</h3>
     <h3 className='w-25'>New Task</h3>
     <h3 className='w-25'>Active Task</h3>
     <h3 className='w-25'>Completed</h3>
     <h3 className=''>Failed</h3>
   </div>
  <br />

 { userData.map(function(elem,idx){
     return (
     <div key={idx} className='rounded-3 px-3 my-2 d-flex justify-content-between align-items-center bg-muted border border-danger'>
     <h2 className='w-25'>{elem.firstName}</h2>
     <h3 className='w-25'>{elem.taskCount.new}</h3>
     <h5 className='w-25 text-info'>{elem.taskCount.active}</h5>
     <h5 className='w-25 text-success'>{elem.taskCount.completed}</h5>
     <h5 className='text-danger'>{elem.taskCount.failed}</h5>
   </div>
  ) })}  
    </div>
  )
}

export default AllTask
