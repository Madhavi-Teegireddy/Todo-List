import React from 'react'
import { useState } from 'react'
import { addNewTodo } from '../Redux/action';
import { useDispatch } from 'react-redux';



const TodoForm = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addNewTodo(text));
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