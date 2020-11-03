import React ,{component,useState,useEffect} from 'react';
import App from '../App';
import '../css/tailwindcss.css';
import picture from '../images/image.png';
import Navbar from './Navbar';
import axios from 'axios';
function Body(){
    const[ida,setIda]=useState(0);
    const[count,setCount]=useState(0);
    const[loading,setLoading]=useState(false);
    const[data, setData]=useState([]);
    const clickHandle=()=>{
        setLoading(true);
        setCount(count+1);
        setIda("thank you for updating me");
        setTimeout(function(){setLoading(false)},3000);
//  let fetch information  
    }
useEffect(()=>{
    const response = axios.get('https://jsonplaceholder.typicode.com/posts/')
   
    .then((res)=>{
        setData(res.data)
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err)

    })

},[]
);
    
    return(
        <div>
            <Navbar/>
            <h1 className="text-green-600">This is our body </h1>
            <h2>state value:{ida}</h2>
            <h2>state value:{count}</h2>
    <button onClick ={clickHandle}>{loading?<p>loading...</p>:<p>update me</p>}</button>
            <image src={picture} alt=""/>
            <a href="">Home</a>
            <a href="/about-us">About</a>
        </div>
    )
}
export default Body;