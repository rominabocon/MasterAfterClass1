import React from 'react'
import {Link} from 'react-router-dom'

function ToDo({id, user, title, date, status}) {

    return (
        <tr key={id}>
            <td className='usuarioImg'>
                <Link to={`/todo/${id}`}  className='userLink'  >
                <img alt='profil'
                    src='https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png'
                    className='userImage' />
                    </Link>
                <p>
                    {user}
                </p>
                
            </td>
            <td >
                <p>
                {title}
                </p>
            </td>
            <td >
                <p>
                {status}
                </p>
            </td>
            <td >
                <p>
                    {date}
                </p>
            </td>
        </tr>
    )
}

export default ToDo