import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TaskMap from './TaskMap';

const TaskData = () => {

    const [array,setArray] = useState(null);

    useEffect(()=>{
        axios.get('/api/v1/task/allTasks')
    .then((response)=>{
        setArray(response.data.tasks);
        console.log(array)
    })
    },[])
  
    
  return (
    
    <div className=' w-auto h-auto '>

            {
            array?
            array.map((items,index)=>(
                <TaskMap userid={items._id} task={items.task} description={items.description}/>
            ))
            :null
            
            }
    </div>
    
  )
}

export default TaskData
