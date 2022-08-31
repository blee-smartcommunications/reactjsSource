import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (

    /* the two backticks are JavaScript template literals 
    * if the task.reminder is true, then it will be the call reminder, otherwise not class
    */
    <div className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle((task.id))}>
      <h3>
        {task.text}
        <FaTimes style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task