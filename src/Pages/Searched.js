  import React, { useEffect, useState } from 'react'
  import { useParams } from 'react-router-dom'
  import { Link } from 'react-router-dom'

  function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();


    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
       const recipes = await data.json();
     setSearchedRecipes(recipes.results)
        };
        useEffect(() => {
          getSearched(params.search);
      }, [params.search]);


   return (
     <div>
      {searchedRecipes.map((item) => {
        return (
            <div className='id' key={item.id}>
              <Link className='search-link'to={'/recipe/' + item.id}>
            <img className='search-image'src={item.image} alt='' />
            <h4 className='title'>{item.title}</h4>
            </Link>
            </div>
        )
      })}
     </div>
   )
  }

 export default Searched