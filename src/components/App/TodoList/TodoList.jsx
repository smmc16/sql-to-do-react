
function TodoList({getList, todoList}) {
    
    const markComplete = (todoId) => {
        axios.put(`/api/todo/${todoId}`).then((response) => {
          getList();
        }).catch((error) => {
          console.log(error);
          alert('Something went wrong')
        })
      }
    
    const deleteItem = (todoId) => {
        axios.delete(`/api/todo/${todoId}`).then((response) => {
          getList();
        }).catch((error) => {
          console.log(error);
          alert('Something went wrong')
        })
      }

    return (
        <>
            <h2>To do list:</h2>
        <table>
          <tbody>
        {
          todoList.map((todoItem) => {
            if (todoItem.complete === true) {
              return <tr key={todoItem.id} className="complete">
                  <td>{todoItem.id}</td><td>{todoItem.todo}</td>
                  <td>Complete!</td>
                  <td><button onClick={() => deleteItem(todoItem.id)}>Delete</button></td>
                </tr>
              };

            if (todoItem.complete === false) {
            return <tr key={todoItem.id} className="incomplete">
                <td>{todoItem.id}</td><td>{todoItem.todo}</td>
                <td><button onClick={() => markComplete(todoItem.id)}>Complete?</button></td>
                <td><button onClick={() => deleteItem(todoItem.id)}>Delete</button></td>
              </tr>
            }
            
          })
          
        }
          </tbody>
        </table>
        </>
    )
};

export default TodoList;