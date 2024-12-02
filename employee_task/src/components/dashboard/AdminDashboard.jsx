// import React from 'react'

import AllTask from "../others/AllTask"
import CreateTask from "../others/CreateTask"
import Header from "../others/header"

const AdminDashboard = (props) => {
  return (
   
    <div className='p-5' style={{ backgroundColor: 'rgb(26, 32, 32)', minHeight:'100vh'}}>  
      <Header changeUser={props.changeUser} />
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
