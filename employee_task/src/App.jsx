import Login from "./components/auth/login"
import './App.css';
import React,{useEffect,useState,useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDashboard from './components/dashboard/AdminDashboard';
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvide";


function App() {

 const [user, setUser] = useState(null);
 const [loggedInUserData, setloggedInUserData] = useState(null);
 const [userData,SetUserData] = useContext(AuthContext)

 useEffect(() =>{
    const loggedInUser= localStorage.getItem("loggedInUser")
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
    }
  
 },[]);

 const handleLogin= (email,password)=>{
   if(email== 'admin@me.com' && password=='123'){
      setUser('admin')  
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
   }
   else if(userData ) {
    const employee= userData.find((e) =>
      e.email === email && e.password === password)
      if(employee){
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee' , data:employee}))
      }
      else{
        alert('Login failed')
       }
   }  
   else{
    alert('Login failed')
   }
 }


  return ( 
    <>
    {!user ? <Login handleLogin={handleLogin} /> :''}
    {user== 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null) }
    </>
  )
}

export default App

