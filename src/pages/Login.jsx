import { Link, Navigate  } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import {  context } from '../main'
import  { useContext } from 'react'

const Login = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const {val,setVal} = useContext(context);

  
  const submit = () =>{
    console.log(password);
    console.log(email);
  }

    const submitHandler = (e) =>{
    e.preventDefault();
      axios.post('/api/v1/users/login', {
          email,
          password
        },{withCredentials:true})
        .then(function (response) {
          console.log(response);
          toast.success(response.data.message)
          setVal(true);
          
        })
        .catch(function (error) {
          console.log(error);
          setVal(false);
          toast.error(error.response.data.message)
        });    
  

    }

if(val)
{
  return <Navigate to="home"/>
}

  return (
    <section className="bg-gray-50 dark:bg-gray-900 ">
    <div className="flex flex-col  items-center justify-center px-6 py-8 mx-auto w-[100vw] h-[90vh] lg:py-0">
   
        <div className="w-full bg-white rounded-lg shadow dark:border   md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                   
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" value={email} onChange={(e) =>setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""  value={password} onChange={(e) =>setPassword(e.target.value)} />
                    </div>
                   
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >Sign in</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <Link to="signin" className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={submit}>Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Login
