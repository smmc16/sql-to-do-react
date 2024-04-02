import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';

function App () {
  
  
  const [todoList, setTodoList] = useState([]);

  const getList = () => {
    axios.get('/api/todo').then((response) => {
      setTodoList(response.data); 
    }).catch((error) => {
      console.log('error in GET', error);
      alert('Something went wrong');
    })

  }

  useEffect(() => {
    getList();
  }, [])
  

  return (
    <div id="fullPage">
    <header>
      <h1>TO DO APP</h1>
    </header>
        <TodoForm getList={getList}/>
        <TodoList getList={getList} todoList={todoList}/>
        
    </div>
  );

}

export default App
