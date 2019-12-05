import React, {useState} from 'react';

function Todo ({todo, index}){
  return <div className="todo">{todo.text}</div>
}
function App() {
    const [todos, setTodos] = useState([
      {
        text: 'Text One',
        isCompleted: false
      },
      {
        text: 'Text Two',
        isCompleted: false
      },
      {
        text: 'Text Three',
        isCompleted: false
      },
      {
        text: 'Text Four',
        isCompleted: false
      }

    ]);

    return (
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, index) =>(
            <Todo key={index} index={index} todo={todo} />
          ) 
            
          )}
        </div>
      </div>
    )
}

export default App;