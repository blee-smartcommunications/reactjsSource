import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  const [tasks, setTask] = useState([
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

  const name = 'Brian'
  //const x = false
  return (
    <div className="container">
      <Header title='Hello Task Tracker by:' requiredPropDemo='jessie' />
      <Tasks tasks={tasks} />
      <h1>Hello Task Tracker by {name}</h1>
      {

        /* <h2>Yes or No: {x ? 'Yes' : 'No'}</h2> */

      }
    </div>
  );
}

export default App;
