import React from 'react'
import Taskform from '../components/Taskform';
import TaskData from '../components/TaskData';
import DeleteTask from '../components/DeleteTask';
import '../App.css'

const Home = () => {
  return (
    <div className=' scroller bg-[#111827] w-[100vw] h-[90vh] gap-[0vh] text-white items-center flex flex-col overflow-auto' id='main'>
      <Taskform/>
      <TaskData/>

    </div>
  )
}

export default Home;
