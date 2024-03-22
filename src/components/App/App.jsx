import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App () {
  
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getList();
  }, [])

  const getList = () => {
    axios.get('/api/todo').then((response) => {
      setTodoList(response.data);
    }).catch((error) => {
      console.log('error in GET', error);
      alert('Something went wrong');
    })

  }

  const sendToServer = (e) => {
    e.preventDefault();
    console.log('todo', todo)
    const data = {todo: todo}
    axios.post('/api/todo', data).then((response) => {
      getList();
      setTodo('');
    }).catch((error) => {
      console.log('Error in POST', error);
      alert('Something went wrong')
    })
  }

  return (
    <div>
    <div>
      <h1>TO DO APP</h1>
    </div>
        <form onSubmit={sendToServer}>
          Enter here: <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}></input>
          <input type="submit"></input>
        </form>
        <h2>To do list:</h2>
        <table>
          <tbody>
        {
          todoList.map((todoItem) => {
            return <tr key={todoItem.id}>
                <td>{todoItem.id}</td><td>{todoItem.todo}</td>
              </tr>
            
          })
          
        }
          </tbody>
        </table>
        
    </div>
  );

}

export default App
