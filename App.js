import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';

function App() {

  const [todos, setTodos] = useState([
    { id: 1, todo: "Learn JavaScript" },
    { id: 2, todo: "Learn React" },
    { id: 3, todo: "Have a Life!" }
  ]);
  
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>todos</h1>
        <Form addTodo={setTodos} todos={todos} />
        <List todos={todos}/>
    </div>
  
  );
}

export default App;
