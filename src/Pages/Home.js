import Popular from "../components/Popular";
import Random from "../components/Vegetarian";
import Search from "../components/Search";
import React, { useState } from 'react'
import Vegetarian from "../components/Vegetarian";
import Mediterranean from "../components/Mediterranean";
import Greek from "../components/Greek";

function Home() {
  return (
    <div>
    <Search />
    <Popular />
    <Vegetarian />
    <Mediterranean />
    <Greek />
    </div>
  )
}

export default Home