import { useState } from 'react'
import TodoCard from './components/TodoCard'


function App() {

  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = (e) => {
    e.preventDefault()
    // console.log(e)
    if(input.trim()) {
      setTasks([...tasks, input.trim()])
      setInput('')

    } else {
      alert('write something')
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((_, idx) => idx!==id))
  }

  const updateTask = (id, newValue) => {
    setTasks(tasks.map((task, idx)=> idx===id ? newValue: task))
  }


  return (
    <>
    <div className='text-white font-bold pt-10 text-center text-4xl'>
    <h1>
      Your To Do
    </h1>
    <form onSubmit={addTask} action="">
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Add new task...' className='placeholder:font-extralight placeholder:font text-white m-10 border-b-2 border-slate-500 focus:outline-0' type="text" />
      <button className=' cursor-pointer ml-5 bg-slate-800 text-white text-l py-0.5 px-2  rounded-md'>+</button>

    </form>
    </div>
    {tasks.map((item, id) => (
      <TodoCard key={id} task={item} onUpdate={(newValue)=> updateTask(id, newValue)} onDelete={()=> deleteTask(id)}>
        
      </TodoCard>
    ))}
    </>
  )
}

export default App
