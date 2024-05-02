import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createContext } from 'react';
import { useState } from 'react';


 export const context = createContext({val:false});

 function MyContext() {
    const [val,setVal] = useState(false);
    const [id,setId] = useState('');
    return(
        <context.Provider value={{val , setVal, id, setId}}>
            <App/>
        </context.Provider>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContext/>
  </React.StrictMode>,
)

