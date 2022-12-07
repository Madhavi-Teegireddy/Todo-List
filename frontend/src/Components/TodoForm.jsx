import React from 'react'
import { useState } from 'react'

const TodoForm = () => {
    const [text, setText] = useState("");

    const handleSubmit = () => {

    }

    const handleChange = (e) => {
        setText(e.target.value)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input className='input'
        placeholder='Enter new todo'
        onChange={handleChange}/>
    </form>
  )
}

export default TodoForm