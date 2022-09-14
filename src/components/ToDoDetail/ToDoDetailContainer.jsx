
import { useEffect } from 'react'
import { getToDoById } from '../../utils/customFetch.js'
import { useState } from 'react'
import ToDoDetail from './ToDoDetail'
import './ToDoDetail.css'
import { useParams } from 'react-router-dom'

function ToDoDetailContainer() {

    const [toDoDetail, setToDoDetail] = useState({})

  const {id} = useParams() 

    useEffect(()=> {
        getToDoById(id).then(response => {
            setToDoDetail(response)
        })
    }, [id])
  return (
    <div className='containerDetail'>
        <ToDoDetail {...toDoDetail}/>

    </div>
  )
}

export default ToDoDetailContainer