const Item = ({ task, id, handleDeleteTask, handleIsDone, isDone }) => {
  return (
    <div className="items-container">
      <button onClick={() => handleIsDone(id)}>{isDone ? '❌' : '✅'}</button>
      <span className={isDone ? 'completed' : 'incompleted'}>{task}</span>
      <button onClick={() => handleDeleteTask(id)}>🗑️</button>
    </div>
  )
}

export default Item;