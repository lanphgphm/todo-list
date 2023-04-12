import { useState } from "react"

const AddTask = ({onAdd}) => {
  // default value for task, time, reminder
  const [text, setText] = useState('')
  const [time, setTime] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    // prevent submit a page 
    e.preventDefault()
    // handle empty text field 
    if(!text){
      alert('Task field currently empty, please add a task desciption')
      return
    }

    onAdd({text, time, reminder})
    setText('')
    setTime('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task Desciption</label>
            <input 
              type='text' 
              placeholder='Add new task...' 
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input 
              type='text' 
              placeholder='Add time for new task...'
              value={time}
              onChange={(e) => setTime(e.target.value)} 
            />
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input 
              type='checkbox' 
              checked={reminder}
              value={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)}
              />
        </div>
        <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask