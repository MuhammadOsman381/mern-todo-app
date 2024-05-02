import DeleteTask from './DeleteTask';
import React, { useContext } from 'react'
import {context } from '../main';
const TaskMap = ({userid,task,description}) => {
    const {id,setId} = useContext(context);
  return (
    <>
         <div  className='mian w-[100vw] h-auto flex flex-col items-center justify-center gap-[10px]'>
                <div key={userid} className='scroller mt-[1.5vw] bg-[#1f2937] flex items-center justify-between border-gray-700 border w-[45vw] h-[7vw] overflow-auto p-[1.5vw] rounded-[5px]'>
                    <div className='scroller w-[34vw]'>
                    <span><strong>Task :</strong> </span>
                    {task}
                    <br/>
                    <span><strong>Description :</strong> </span>
                    {description}
                    </div>
                    {/* {setId(key)} */}
                    {/* {console.log(userid)} */}
                    <DeleteTask id={userid}/>
                </div>
                </div>
    </>
  )
}

export default TaskMap
