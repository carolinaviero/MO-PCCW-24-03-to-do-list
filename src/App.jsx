import { useState } from 'react';
import './App.css';
import Item from './components/Item'
import Form from './components/Form'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Walk the dog",
      isDone: false 
    },
    {
      id: 2,
      task: "Do the dishes",
      isDone: false 
    },
    {
      id: 3,
      task: "Send Sandra an email",
      isDone: false 
    },
    {
      id: 4,
      task: "Grocery shopping",
      isDone: false
    }
  ]);

  const handleAddTask = (value) => {
    setTasks([...tasks, { id: tasks.length + 1, task: value, isDone: false }])
  }

  return (
    <div className="App">
     <h1>To Do List</h1>
     {tasks.map(element => <Item task={element.task} />)}
     <Form handleAddTask={handleAddTask} />
    </div>
  );
}

export default App;