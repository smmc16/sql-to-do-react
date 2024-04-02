import {useState, useEffect} from 'react';
import axios from 'axios';

function TodoForm({getList}) {

    const [todo, setTodo] = useState('');

    useEffect(() => {
        getList();
      }, []);

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
        <form onSubmit={sendToServer}>
            Enter here: <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}></input>
            <input type="submit"></input>
        </form>
      )
}

export default TodoForm;