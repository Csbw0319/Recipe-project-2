import Popular from "../components/Popular";
import Search from "../components/Search";
import React, { useState } from 'react'
import Vegetarian from "../components/Vegetarian";
import Mediterranean from "../components/Mediterranean";import Greek from "../components/Greek";

function Home() {
  return (
    <div>
    <Search />
    <h4>Need Inspiration? Look below!</h4>
    <Popular />
    <Vegetarian />
    <Mediterranean />
    </div>
  )
}

export default Home