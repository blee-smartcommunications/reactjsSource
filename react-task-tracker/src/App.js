import { useDebugValue, useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Task 1',
      day: 'January 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Task 2',
      day: 'Feb 6th at 2:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Task 3',
      day: 'March 16th at 2:30pm',
      reminder: false
    }
  ])

  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) =>{
    console.log(id);

    // this says... 
    // 1. use a map to iterate through the tasks
    // 2. create a function 
    // 3. if the id of the task equals the id of the task passed in
    // 4. set the reminder property to the opposite of what it was or leave the task as is
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder: 
        !task.reminder} : task))
  }

  const name = 'Brian'
  //const x = false
  return (
    <div className="container">
      <Header title='Task Tracker by:' requiredPropDemo='Jessie'/>
      <AddTask/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks Today'}
      <h1>Hello Task Tracker by {name}</h1>
      {

        /* <h2>Yes or No: {x ? 'Yes' : 'No'}</h2> */

      }
    </div>
  );
}

export default App;
