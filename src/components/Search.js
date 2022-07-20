import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Search() {

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    }
    const [input, setInput] = useState("");
    const navigate = useNavigate();
  return (
    <form onSubmit={submitHandler}className='form'>
        <input onChange={(e) => setInput(e.target.value) }type='text' value={input} />
        <button type='submit'>Submit</button>
    </form>

  )
}

export default Search