import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Form = ({ handleAddTask }) => {
  const [value, setValue] = useState('');

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input type="text" id="task" name="task" onChange={(event) => setValue(event.target.value)} value={value}></input>
      <Button 
        className="form-button btn btn-light"
        type="submit" 
        onClick={() => {
          handleAddTask(value)
          setValue('')
        }}>
          Add task
        </Button>
    </form>
  )
}

export default Form;