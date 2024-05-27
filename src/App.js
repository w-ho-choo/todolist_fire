import { useState } from 'react';
import './App.css';
import { TextField } from '@mui/material';

const TodoItemInputField = (props) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <TextField
        id="todo-item-input"
        label="Todo Item"
        variant='outlined'
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <TodoItemInputField />
    </div>
  );
}

export default App;
