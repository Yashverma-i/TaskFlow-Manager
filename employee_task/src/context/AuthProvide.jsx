import React, {createContext, useState,useEffect} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext= createContext()

const AuthProvide = ({children}) => {
const [userData,setUserData]= useState([])
   
    useEffect(() =>{
        setLocalStorage()        
        const {employees} = getLocalStorage();
        setUserData(employees)
    },[]);

  return (
    <div>
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvide
