import axios from 'axios'
import  {useEffect } from 'react'
import toast from 'react-hot-toast'
const DeleteTask = ({id}) => {
  
    const deleteTask = async () =>{
        try {
            const { data } = await axios.delete(`/api/v1/task/${id}`, {
              withCredentials: true,
            });
            toast.success(data.message);
            // console.log(id)
          } catch (error) {
            toast.error(error.response.data.message);
          }
    } 


  return (
    <div>
       <button onClick={deleteTask} type="submit" className="w-[7vw] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >Delete</button>
    </div>
  )
}

export default DeleteTask
