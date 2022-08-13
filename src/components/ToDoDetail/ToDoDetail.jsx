import React from 'react'


function ToDoDetail({title, user}) {





  return (
    <div className="card">
    <img src='https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png' alt="Avatar" />
    <div className="containerDetail">
      <h4>Title <b>{title}</b></h4> 
      <p> Usuario : {user}</p> 
    </div>
  </div>
  )
}

export default ToDoDetail