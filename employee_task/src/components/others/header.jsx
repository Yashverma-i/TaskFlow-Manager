import React,{useState} from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props)=> {

  const [username, setusername] =useState('')

  const logOutUser=  ()=>{
      localStorage.setItem('loggedInUser','')
      props.changeUser('')
      // window.location.reload();
  }

  return (
    <div className='container'>
    <div className="d-flex justify-content-between pb-2">
    <h1 className="fs-4">Hello <br /><span className='fs-1 fw-bolder d-block text-primary'>  {props.data?.firstName ? `${props.data.firstName} 👋` : 'Admin 👋'} </span></h1>
      <button onClick={logOutUser}
       className="bg-danger fs-3 rounded-2 p-1 m-4">Log Out</button>
    </div>
   </div>
  )
}

export default Header
