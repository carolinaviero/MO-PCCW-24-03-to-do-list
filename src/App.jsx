import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    
    setTasks(updatedTasks);
  }

  const handleIsDone = (id) => {
    const foundTask = tasks.find(task => task.id === id);
    
    foundTask.isDone = !foundTask.isDone;

    const newTasks = tasks.map(task => task.id === id ? foundTask : task);

    setTasks(newTasks);
  }

  return (
    <div className="App">
     <h1>To Do List</h1>
     {tasks.map(element => 
        <Item 
          key={element.id} 
          task={element.task} 
          id={element.id} 
          handleDeleteTask={handleDeleteTask} 
          handleIsDone={handleIsDone}
          isDone={element.isDone}
        />)}
     <Form handleAddTask={handleAddTask} />
    </div>
  );
}

export default App;