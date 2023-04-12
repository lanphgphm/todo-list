import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1, 
      text: 'do something', 
      time: 'Mar 31st', 
      reminder: false,
    }, 
    { 
      id: 2, 
      text: 'do something else', 
      time: 'Mar 31st', 
      reminder: true,
    },
  ])

  // add task 
  const addTask = (task) => {
    const id = Math.ceil(Math.random()*100000)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    console.log('task ', id, ' reminder has been toggled')
    setTasks(tasks.map((task) => 
      task.id === id ? (
        {...task, reminder: !task.reminder }
      ) : (
        task
      )))
  }

  return (
    <div className="container">
      <Header 
          onAdd={() => setShowAddTask(!showAddTask)} 
          showForm={showAddTask}
        />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
          <Tasks tasks={tasks} 
            onDelete={deleteTask} 
            onToggle={toggleReminder} 
            />
        ) : (
          'All done! No tasks left.'  
        )}
    </div>
  );
}

export default App;