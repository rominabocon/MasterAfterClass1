import React from 'react'
import { useEffect } from 'react'
import { getToDoById } from '../../utils/customFetch.js'
import {useParams} from 'react-router-dom'
import { useState } from 'react'
import ToDoDetail from './ToDoDetail'
import './ToDoDetail.css'

function ToDoDetailContainer() {

    const [toDoDetail, setToDoDetail] = useState({})

    const {id} = useParams()

    useEffect(()=> {
        getToDoById(id).then(response => {
            setToDoDetail(response)
        })
    })
  return (
    <div className='containerDetail'>
        <ToDoDetail {...toDoDetail}/>

    </div>
  )
}

export default ToDoDetailContainer