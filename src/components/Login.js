import React,{useState,useEffect, useReducer} from 'react';
import '../css/tailwindcss.css';
import Navbar from './Navbar';
import axios from 'axios';
import '../App.css';
import { useHistory } from "react-router-dom"
function Login(){
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[loading,setLoading]=useState(false)
    const[message,setMessage]=useState("")
    let history=useHistory();
    const handleLogin=(event)=>{
        setLoading(true)
        event.preventDefault();
        const data={
            "username":username,
            "password":password
        }
        axios.post("http://127.0.0.1:8000/user-creation/",data)
        .then((res)=>{
            console.log(res.data)
            setMessage("login sucessfull")
            setLoading(false)
            history.push('/')
        })
        .catch((err)=>{
            console.log(err)
            setMessage("Not Login")
            setLoading(false)
        })
    }
    return(
        <>
        <Navbar/>

        <div className="bgColor py-12">
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/4"></div>
                <div className="w-full md:w-2/4">
                    <div className="bg-gray-100">
                        <p className="text-green-600 p-2">{message}</p>
                        <form onSubmit={handleLogin} className="p-4" method="post">
                            <label>Username</label>
                            <input type="text"  name="username" value={username} onChange={(e)=>setUsername(e.target.value)}  className="py-3 px-3 w-full rounded-t-sm"/>
                            <label>Password</label>
                            <input type="password"  name="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="***" className="py-3 px-3 w-full rounded-t-sm"/><br/><br/>
                            <button type="submit" className="bg-green-400 w-full rounded-b p-2 text-gray-100">{loading?<span>loading wait...</span>:<span>Login</span>}</button>
                            
                        </form>

                    </div>
                </div>
                <div className="w-full md:w-1/4"></div>

            </div>

        </div>




        </>
    )
}
export default Login;