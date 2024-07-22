import { useState } from 'react';

const Form = ({ handleAddTask }) => {
  const [value, setValue] = useState('');

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input type="text" id="task" name="task" onChange={(event) => setValue(event.target.value)} value={value}></input>
      <button 
        type="submit" 
        onClick={() => {
          handleAddTask(value)
          setValue('')
        }}>
          Add task
        </button>
    </form>
  )
}

export default Form;