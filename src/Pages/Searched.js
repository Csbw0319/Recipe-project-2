  import React, { useEffect, useState } from 'react'

  function Searched() {

    const [searched, setSearched] = useState([]);

    useEffect(() => {
        getSearched();
    }, []);

    const getSearched = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
       const data = await api.json();
     setSearched(data.recipes)
        };
   return (
     <div>
      Searched
     </div>
   )
  }

 export default Searched