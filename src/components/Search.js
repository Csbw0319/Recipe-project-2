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
    <FormStyle onSubmit={submitHandler}>
            <div>
              <FaSearch></FaSearch>
            <input onChange={(e) => setInput(e.target.value)}
            type='text' value={input} />
        </div>
    </FormStyle>

  )
}
const FormStyle = styled.form`
margin: 0rem 20rem;
position: relative;
width: 100%

div {
  width: 100%;
  position: relative;
}
input{
  border: none;
  font-size: 1rem;
  padding: .5rem;
  width: 100%
}
svg{
  position: absolute;
  top: 50%
  left: 0%
  transform: translate(100%, -50%,);
  background: none;
  margin: .5rem;
}
`

export default Search