import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { customFetch } from '../../utils/customFetch'
import ToDoList from './ToDoList'
import './ToDos.css'
function ToDoContainer() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        customFetch().then(response => {
            setTodos(response)
        })
    },[])

  return (
    <div className='containerToDoList'>
        <table className='min-w-full leading-normal'>
            <thead>
            <tr>
                <th className='col-1'>User</th>
                <th className='col-1'>Title </th>
                <th className='col-1'>Status</th>
                <th className='col-1'>Create At</th>
            </tr>
            </thead>
            <ToDoList todos={todos} />
        </table>
    </div>
  )
}

export default ToDoContainer