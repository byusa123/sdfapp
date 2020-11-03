import Axios from 'axios';
import React,{useState,useEffect} from 'react';
import '../css/tailwindcss.css';
import Navbar from './Navbar';
function Signup(){
    const[firstname,setFirstname]=useState("");
    const[Lastname,setLastname]=useState("");
    const[Email,setEmail]=useState("");
    const[password,setpassword]=useState("");
    const[loading,setloading]=useState("");
    const[message,setMessage]=useState("")

    const handleForm =(e)=>{
        e.preventDefault();
        const data={
            "firstname":firstname,
            "lastname":Lastname,
            "phone":Email,
        }
        //let send data to endpoint
        Axios.post("https://jsonplaceholder.typicode.com/posts/",data)
        .then((res)=>{
            console.log(res.data)
            setloading(false)
            setMessage("account has been successful created")
        })
    
        .catch((err)=>{
            console.log(err)
            setloading(false)
            setMessage("account creation failed")
        })
    }
    return(
        <>
        <Navbar/>
        <div >
            <div className="flex flex-wrap grap-4 mt-12 p-4">
                <div className="w-full md:w-1/5"></div>
                <div className="w-full md:w-3/5 bg-gray-100 rounded-lg py-4 shadow-md">
                    <p className="p-2 font-bold text-red-400">user creation</p>
                    <div className="w-64 text-green-600"> {message}</div>
                <form onSubmit={handleForm} method="POST">
                    <label>Firstname</label>
                    <input type="text" name="firstname" value={firstname} onChange={(event=>setFirstname(event.target.value))} placeholder="Enter your firstname" className="w-full border py-4 rounded-lg"></input>
                    <label>Lastname</label>
                    <input type="text" name="Lastname" value={Lastname}  onChange={(event=>setLastname(event.target.value))} placeholder="Enter your Lastname" className="w-full border py-4 rounded-lg"></input>
                    <label>Email</label>
                    <input type="text" name="Email" value={Email} onChange={(event=>setEmail(event.target.value))} placeholder="Enter Email" className="w-full border py-4 rounded-lg"></input>
                    <label>password</label>
                    <input type="text" name="password" placeholder="***********" className="w-full border py-4 rounded-lg"></input>
    <button type="submit" className="bg-blue-800 rounded-lg py-2 px-6">
         {loading? <span>please wait....</span>:<span>submit</span>}
         </button>
                </form>
                </div>
                <div className="w-full md:w-1/5"></div>
            </div>
        </div>
        </>
    );
}
export default Signup;