import { useState } from 'react'
import TodoCard from './components/TodoCard'


function App() {

  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')
  const [checked, setChecked] = useState(false)

  const toggleCheck = (id) => {

  //  setTasks(tasks.filter((_, idx)=> idx==id ? checked=!checked))
  setTasks(tasks.map((task, idx)=> idx===id ? { ...task, checked: !task.checked} : task))
   console.log(tasks[id].checked)
  }


  const addTask = (e) => {

    e.preventDefault()
    // console.log(e)
    if(input.trim()) {
      setTasks([...tasks, {text: input.trim(), checked: false}])
      setInput('')

    } else {
      alert('write something')
    }
  }

  const deleteTask = (id) => {

    setTasks(tasks.filter((_, idx) => idx!==id))
  }

  const updateTask = (id, newValue) => {

    setTasks(tasks.map((task, idx)=> idx===id ? { ...task, text: newValue}:task))
  }


  return (
    <>
    <div className='min-h-screen flex flex-col items-center'>

    <div className='w-[500px]'>

   
    <div className='text-white font-bold pt-10 text-center text-4xl'>
    <h1>
      Your To Do
    </h1>
    <form className='mb-6 mt-6 flex items-center w-[500px] mx-auto' onSubmit={addTask} action="">
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Add new task...' className='flex-1 placeholder:font-extralight placeholder:font text-white border-b-2 border-slate-500 focus:outline-0' type="text" />
      <button className=' cursor-pointer ml-5 bg-slate-800 text-white text-l py-0.5 px-2  rounded-md'>+</button>

    </form>
    </div>
    <div>
  {tasks.map((item, id) => (
      <TodoCard key={id} task={item} onCheck={()=>toggleCheck(id)} onUpdate={(newValue)=> updateTask(id, newValue)} onDelete={()=> deleteTask(id)}>
      </TodoCard>
    ))}
    </div>
    </div>
     </div>
  
    </>
  )
}

export default App
