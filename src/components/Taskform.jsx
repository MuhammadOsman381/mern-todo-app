import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Taskform = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addTask = (e) =>{
        e.preventDefault();
        axios.post('/api/v1/task/new',{
            title,
            description,
        },{withCredentials:true})
        .then(function (response) {
            console.log(response);
            toast.success(response.data.message)
          })
          .catch(function (error) {
            console.log(error);
            toast.error(error.response.data.message)
          });    
        // console.log(title,description)
    } 
  return (
    <form className=' mt-[20px] border  border-gray-700 w-[45vw] h-auto p-[6vh] bg-[#1f2937] flex flex-col items-center justify-center gap-[2vh] rounded-[5px]'>
      <div className=' w-[32vw] h-auto border-gray-300'>
         <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your task</label>
         <input  className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your task" required="" value={title} onChange={(e) =>setTitle(e.target.value)} />
        </div>

        <div className=' w-[32vw] h-auto'>
         <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
         <input  className="overflow-auto outline-none h-[12vh] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-auto" placeholder="Description of your task" required="" value={description} onChange={(e) =>setDescription(e.target.value)}/>
        </div>

        <div className=' w-[32vw] h-auto'>
        <button onClick={addTask} type="submit" className="w-[9vw] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >Add Task</button>
        </div>

        
    </form>
  )
}

export default Taskform
