import {useState} from 'react'
import './login.css'; 

const Login=({handleLogin}) => {

  // console.log(handleLogin)
  const [email, setEmail]= useState('');
  const [pass, setPass]= useState('');

   const submitHandler = (e) =>{
    e.preventDefault();
    handleLogin(email, pass);
    setEmail("");
    setPass("");
   }

  return (
    <div className="container-fluid vh-100 pt-5" style={{ backgroundColor: 'rgb(26, 32, 32)'}}>
      <div className="container text-center">
        <div className=" col-md-10 col-lg-6 row shadow-lg loginbox p-2 mt-4 mx-auto bg-success ">    
        <form className=''
        onSubmit= {(e) =>{
          submitHandler(e)
          }}>
           <h1>Login</h1>  <br />
        <input value={email}
         onChange={(e)=>{
          setEmail(e.target.value)
        }}
         className="border-2 py-3 border-danger mb-2 w-100 text-dark" type="email" placeholder="Enter your e-mail" />  <br/>
        <input value={pass}
         onChange={(e)=>{
          setPass(e.target.value)
        }}
        className="border-2 py-3 border-danger  w-100  text-dark" type="password" placeholder="Enter your password" /> <br/>
        <button className="mt-3 py-2 w-50 btnn bg-primary mb-4">Log In</button>
        </form>
        </div>

      </div>
    </div>
  )
}

export default Login;
