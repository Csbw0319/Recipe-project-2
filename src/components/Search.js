import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

function Search() {

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    }
    const [input, setInput] = useState("");
    const navigate = useNavigate();
  return (
    <div>
       <i className='icon'> <FaSearch /></i>
    <form onSubmit={submitHandler}className='form'> 
     <input className='input-field' onChange={(e) => setInput(e.target.value) }type='text' value={input} />
        <button type='submit'>Submit</button>
    </form>
    <h4>Need Inspiration? Look below!</h4>
    </div>

  )
}

export default Search