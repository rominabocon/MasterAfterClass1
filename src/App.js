import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import ToDoContainer from './components/Todos/ToDoContainer.jsx';
import ToDoDetailContainer from './components/ToDoDetail/ToDoDetailContainer.jsx';

function App() {
  return (
  <>
    <NavBar/>
    <Routes>
      <Route path='/todos' element={<ToDoContainer/>}/>
      <Route path='/todo/:id' element={<ToDoDetailContainer/>}/>

    </Routes>
  </>
  );
}

export default App;
