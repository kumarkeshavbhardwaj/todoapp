import React from 'react'

const TodoCard = ({task, onDelete, onUpdate, onCheck}) => {
  return (
    <div className='w-[500px] flex justify-between text-white rounded-xl border-1 py-2 px-4 border-slate-800 text-xl my-5 text-left'>
      <input checked={task.checked} onChange={onCheck} className='mr-4 accent-black w-6 h-6 rounded' type='checkbox'></input>
        <input disabled={task.checked} onChange= {e=> onUpdate(e.target.value)} value={task.text ?? ''} className={`${task.checked? 'line-through' : ''} ${task.checked? 'text-gray-600' : 'text-white'} mr-2 w-full focus:outline-0`} type="text" ></input>
        <button className='text-red-700 cursor-pointer' onClick={onDelete}>
            X
        </button>
    </div>
  )
}

export default TodoCard