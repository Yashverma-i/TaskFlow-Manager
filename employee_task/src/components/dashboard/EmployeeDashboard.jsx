// import React from 'react'
import Header from "../others/header"
import TaskListNumber from "../others/TaskListNumber"
import TaskList from "../taskList/TaskList"

const EmployeeDashboard = (props) => {

  return (
    <div className='container-fluid pt-5 px-4 ' style={{ backgroundColor: 'rgb(26, 32, 32)',minHeight: '100vh' }}>
    <Header changeUser={props.changeUser} data={props.data}/>
    <TaskListNumber  data={props.data}/>
    <TaskList  data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
