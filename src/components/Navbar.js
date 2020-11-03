import React,{Component,useState} from 'react';
import App from '../App';

function Navbar(){
  const[toggle,setToggle]=useState(false);
  const[drop,setDrop]=useState(false);
  const [clicks,setClicks]=useState(0);
  const[small,setSmall]=useState(false);
  const handleToggle=()=>{
    if(clicks===0){
      setToggle(true);
      setDrop(false);
      setClicks(1);

    }else{
      setToggle(false);
      setClicks(0);
    }

    
  }
  const solutionhandle=()=>{
    setDrop(true);
    setToggle(false);

  }
  const handleClick=()=>{
    if(clicks===0){
      setToggle(false);
      setDrop(false);
      setSmall(true);
      setClicks(1);

    }else{
      setToggle(false);
      setSmall(false);
      setDrop(false);
      setClicks(0);
    }
  }
    return(
      <>


<div className="relative bg-white">
  <div className="px-4 mx-auto max-w-7xl sm:px-6">
    <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
      <div className="lg:w-0 lg:flex-1">
        <a href="#" className="flex">
          <img className="w-auto h-8 sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow"/>
        </a>
      </div>
      <div className="-my-2 -mr-2 md:hidden">
        <button type="button" onClick={handleClick} className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
       
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <nav className="hidden space-x-10 md:flex">
        <div className="relative">
         
        <button type="button" onClick={solutionhandle} className="inline-flex items-center space-x-2 text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out group hover:text-gray-900 focus:outline-none focus:text-gray-900">
            <span>Solutions</span>
          
            <svg className="w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>

          {drop?
          <div className="absolute w-screen max-w-md px-2 mt-3 -ml-4 transform md: sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 " >
            <div className="rounded-lg shadow-lg">
              <div className="overflow-hidden rounded-lg shadow-xs">
                <div className="relative z-20 grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                  <a href="#" className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                    
                   
                    <div className="space-y-1">
                      <p className="text-base font-medium leading-6 text-gray-900">
                        Analytics
                      </p>
                      <p className="text-sm leading-5 text-gray-500">
                        Get a better understanding of where your traffic is coming from.
                      </p>
                    </div>
                  </a>
                  <a href="#" className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                    
                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <div className="space-y-1">
                      <p className="text-base font-medium leading-6 text-gray-900">
                        Engagement
                      </p>
                      <p className="text-sm leading-5 text-gray-500">
                        Speak directly to your customers in a more meaningful way.
                      </p>
                    </div>
                  </a>
                  <a href="#" className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                    
                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div className="space-y-1">
                      <p className="text-base font-medium leading-6 text-gray-900">
                        Security
                      </p>
                      <p className="text-sm leading-5 text-gray-500">
                        Your customers data will be safe and secure.
                      </p>
                    </div>
                  </a>
                  <a href="#" className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                 
                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <div className="space-y-1">
                      <p className="text-base font-medium leading-6 text-gray-900">
                        Integrations
                      </p>
                      <p className="text-sm leading-5 text-gray-500">
                        Connect with third-party tools that you’re already using.
                      </p>
                    </div>
                  </a>
                  <a href="#" className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                      <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <div className="space-y-1">
                      <p className="text-base font-medium leading-6 text-gray-900">
                        Automations
                      </p>
                      <p className="text-sm leading-5 text-gray-500">
                        Build strategic funnels that will drive your customers to convert
                      </p>
                    </div>
                  </a>
                </div>
                <div className="px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                  <div className="flow-root">
                    <a href="#" className="flex items-center p-3 -m-3 space-x-3 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                      
                      <svg className="flex-shrink-0 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Watch Demo</span>
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="#" className="flex items-center p-3 -m-3 space-x-3 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                      
                      <svg className="flex-shrink-0 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Contact Sales</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
          :<span></span>}
        </div>

        <a href="#" className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900">
          Pricing
        </a>
        <a href="#" className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900">
          Docs
        </a>

        <div className="relative">
        
          <button type="button" onClick={setToggle} className="inline-flex items-center space-x-2 text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900">
            <span>More</span>
         
            <svg className="w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>

         {toggle?

          <div className="absolute w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
            <div className="rounded-lg shadow-lg">
              <div className="overflow-hidden rounded-lg shadow-xs">
                <div className="relative z-20 grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                  <a href="#" className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
               
                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <div className="space-y-1">
                      <p className="text-base font-medium leading-6 text-gray-900">
                        Help Center
                      </p>
                      <p className="text-sm leading-5 text-gray-500">
                        Get all of your questions answered in our forums or contact support.
                      </p>
                    </div>
                  </a>
                  <a href="#" className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                    
                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div className="space-y-1">
                      <p className="text-base font-medium leading-6 text-gray-900">
                        Guides
                      </p>
                      <p className="text-sm leading-5 text-gray-500">
                        Learn how to maximize our platform to get the most out of it.
                      </p>
                    </div>
                  </a>
                  <a href="#" className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                   
                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div className="space-y-1">
                      <p className="text-base font-medium leading-6 text-gray-900">
                        Events
                      </p>
                      <p className="text-sm leading-5 text-gray-500">
                        See what meet-ups and other events we might be planning near you.
                      </p>
                    </div>
                  </a>
                  <a href="#" className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                  
                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div className="space-y-1">
                      <p className="text-base font-medium leading-6 text-gray-900">
                        Security
                      </p>
                      <p className="text-sm leading-5 text-gray-500">
                        Understand how we take your privacy seriously.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="px-5 py-5 space-y-5 bg-gray-50 sm:px-8 sm:py-8">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium leading-5 tracking-wide text-gray-500 uppercase">
                      Recent Posts
                    </h3>
                    <ul className="space-y-4">
                      <li className="text-base leading-6 truncate">
                        <a href="#" className="font-medium text-gray-900 transition duration-150 ease-in-out hover:text-gray-700">
                          Boost your conversion rate
                        </a>
                      </li>
                      <li className="text-base leading-6 truncate">
                        <a href="#" className="font-medium text-gray-900 transition duration-150 ease-in-out hover:text-gray-700">
                          How to use search engine optimization to drive traffic to your site
                        </a>
                      </li>
                      <li className="text-base leading-6 truncate">
                        <a href="#" className="font-medium text-gray-900 transition duration-150 ease-in-out hover:text-gray-700">
                          Improve your customer experience
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="text-sm leading-5">
                    <a href="#" className="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500">
                      View all posts &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
         :<span></span>} 

        </div>
      </nav>
      <div className="items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0">
        <a href="#" className="text-base font-medium leading-6 text-gray-500 whitespace-no-wrap hover:text-gray-900 focus:outline-none focus:text-gray-900">
          Sign in
        </a>
        <span className="inline-flex rounded-md shadow-sm">
          <a href="/user-signup" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
            Sign up
          </a>
        </span>
      </div>
    </div>
  </div>

{small?

  <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hiddden md:hidden">
    <div className="rounded-lg shadow-lg">
      <div className="bg-white divide-y-2 rounded-lg shadow-xs divide-gray-50">
        <div className="px-5 pt-5 pb-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <img className="w-auto h-8" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow"/>
            </div>
            <div className="-mr-2">
              <button type="button" onClick={()=>setSmall(false)} className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
                
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <nav className="grid gap-y-8">
              <a href="#" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
               
                <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <div className="text-base font-medium leading-6 text-gray-900">
                  Analytics
                </div>
              </a>
              <a href="#" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
               
                <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <div className="text-base font-medium leading-6 text-gray-900">
                  Engagement
                </div>
              </a>
              <a href="#" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                
                <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div className="text-base font-medium leading-6 text-gray-900">
                  Security
                </div>
              </a>
              <a href="#" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
               
                <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <div classNameName="text-base font-medium leading-6 text-gray-900">
                  Integrations
                </div>
              </a>
              <a href="#" classNameName="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
              
                <svg classNameName="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <div className="text-base font-medium leading-6 text-gray-900">
                  Automations
                </div>
              </a>
            </nav>
          </div>
        </div>
        <div className="px-5 py-6 space-y-6"></div>
        <div classNameName="grid grid-cols-2 gap-y-4 gap-x-8">
            <a href="#" className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700">
              Pricing
            </a>
            <a href="#" className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700">
              Docs
            </a>
            <a href="#" className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700">
              Enterprise
            </a>
            <a href="#" className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700">
              Blog
            </a>
            <a href="#" className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700">
              Help Center
            </a>
            <a href="#" className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700">
              Guides
            </a>
            <a href="#" className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700">
              Security
            </a>
            <a href="#" className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700">
              Events
            </a>
          </div>
          <div className="space-y-6">
            <span className="flex w-full rounded-md shadow-sm">
              <a href="#" className="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
                Sign up
              </a>
            </span>
            <p className="text-base font-medium leading-6 text-center text-gray-500">
              Existing customer?
              <a href="#" className="text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    :<span></span>}
  </div>


      </>
    )
}

export default Navbar;