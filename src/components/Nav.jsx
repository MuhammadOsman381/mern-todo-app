import React, { useContext } from 'react'
import { Link, Navigate} from 'react-router-dom'
import {context } from '../main';
import axios from 'axios';
import toast from 'react-hot-toast';
import logo from '../assets/logo.png';

const Nav = () => {

  const {val,setVal} = useContext(context);

    const logout = (e) =>{
    e.preventDefault();
      axios.get('/api/v1/users/logout'
      ,{
        withCredentials:true
      })
        .then(function (response) {
          console.log(response);
          toast.success(response.data.message)
          setVal(false);
          
        })
        .catch(function (error) {
          console.log(error);
          setVal(true);
          toast.error(error.response.data.message)
        });    
  
    }



  return (
    <div className=' w-[100vw] h-[10vh] flex items-center p-[15px] justify-between bg-black text-white'>
      <div className=" text-[19px] flex flex-row items-center justify-center gap-[1vw] ">
        <img src={logo} alt="" className='w-[20px] h-[20px] '/>
        <strong>Todo App</strong>
      </div>
      <div className=' w-[20vw] h-auto flex items-center justify-center gap-[5vh] cursor-pointer'>
      <Link to='home'>Home</Link>
        {
          val?
          <Link onClick={logout} to='logout'>LogOut</Link>:
          <Link to='/'>LogIn</Link>
        }
        <Link to='profile'>Profile</Link>

    
      </div>
    </div>
  )
}

export default Nav
