'use client'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(title)
    // console.log(desc)
    setMainTask([...mainTask, {title, desc}])
    settitle("")
    setdesc("")
    console.log(mainTask)
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  };

  const submitRefresh = (e) => {
    e.preventDefault()
    setMainTask([])
  };

  let renderTask = <h2 className='text-lg p-8 pl-9'>No Task Available</h2>

  if (mainTask.length>0) {
    renderTask = mainTask.map((t, i)=>{
      return (
        <>
          <li key={i} className='flex items-center justify-between pl-9 pr-9 textUl'>
            <div className='flex items-center justify-between w-2/3 mt-6 mb-6'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-lg font-medium'>{t.desc}</h6>
          </div>
          <button onClick={()=>{deleteHandler(i)}} className='bg-red-400 text-white px-4 py-2 rounded font-bold mt-6 mb-6'>Delete</button>
          </li>
        </>
      )
    })
  }
  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Sayan's ToDo list</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2 w-1/4' 
        placeholder='Enter Titile here'
        value={title}
        onChange={(e)=>{
          // console.log(e.target.value)
          settitle(e.target.value)
        }}
        />
        <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2 w-2/6' 
        placeholder='Enter Description here'
        value={desc}
        onChange={(e)=>{
          // console.log(e.target.value)
          setdesc(e.target.value)
        }}
        />
        <button className='bg-black text-white px-4 py-3 m-5 text-2xl font-bold rounded'>Add Task</button>
        <button onClick={submitRefresh} className='bg-black text-white px-4 py-3 m-5 text-2xl font-bold rounded'>Reset</button>
      </form>
      <hr />
      <div className='bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page