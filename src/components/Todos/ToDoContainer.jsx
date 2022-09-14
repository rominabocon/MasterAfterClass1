import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import { customFetch } from '../../utils/customFetch'
import ToDoList from './ToDoList'
import './ToDos.css'
function ToDoContainer() {

    const [todos, setTodos] = useState([])
    
    const {status} = useParams()

    useEffect(() => {
       
        if(!status){

        customFetch().then(response => {
            setTodos(response)})
        }else {
            customFetch().then(r => {
                setTodos(r.filter(st => st.status === status))
            })
        }
    },[status])

  return (
    <div className='containerToDoList'>
        <div className='buttons'>
        <Link to='/todos/Pending' >Pending task</Link>
        <Link to='/todos/In%20progress' >In progress</Link>
        <Link to='/todos/Done' >Done</Link>
        </div>
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