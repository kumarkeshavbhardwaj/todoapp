import React from 'react'

const TodoCard = ({task, onDelete, onUpdate}) => {
  return (
    <div className='w-[500px] flex justify-between text-white rounded-xl border-1 py-2 px-4 border-slate-800 text-xl my-5 text-left'>
        <input onChange={e=> onUpdate(e.target.value)} value={task} className=' mr-2 w-full focus:outline-0' type="text" ></input>
        <button className='text-red-700 cursor-pointer' onClick={onDelete}>
            X
        </button>
    </div>
  )
}

export default TodoCard