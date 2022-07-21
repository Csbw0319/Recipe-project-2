import React from 'react'
import styled from 'styled-components';
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
    <form onSubmit={submitHandler}>
            <div className='icon'>
              <FaSearch />
            <input className='input'onChange={(e) => setInput(e.target.value)}
            type='text' value={input} />
        </div>
    </form>

  )
}


export default Search