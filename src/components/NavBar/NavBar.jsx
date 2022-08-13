
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faList,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'

function NavBar() {



  return (
    <>
        <div className="topnav">
            <Link to='/'   className='active'>
                <FontAwesomeIcon icon={faHome} className='mr-3' /> Home
            </Link>
            <Link to='/todos'>
                <FontAwesomeIcon icon={faList} className='mr-3' /> My to-do list
            </Link>
            <Link to='/addToDo'>
                <FontAwesomeIcon icon={faPlus} className='mr-3' /> Add item
            </Link>

        </div>
    </>
  )
}

export default NavBar