import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {Splide, SplideSlide} from  '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from 'react-router-dom'


function Popular() {

const [popular, setPopular] = useState([]);

useEffect(() => {
getPopular();
}, []);

    const getPopular = async () => {
        const check = localStorage.getItem('popular');

        if(check){
            setPopular(JSON.parse(check));
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
            const data = await api.json();
            setPopular(data.recipes)

            localStorage.setItem('popular', JSON.stringify(data.recipes));
        }
        
      
    };
    return (
    <div>
        <Wrapper> 
        <h3>Popular Recipes</h3>
    
            <Splide options={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: 'free'
            }}>
            {popular.map((recipe) => {
                return (
                    <SplideSlide key={recipe.id}>
                    <Card>
                        <Link className='link' to={'/recipe/' + recipe.id}>
                       <img className='image' src={recipe.image} alt={recipe.title} />
                       <p className='recipe-name'>{recipe.title}</p> 
                       </Link>
                    </Card>
                    </SplideSlide>
                )
            })}
            </Splide>
           </Wrapper>
</div>
    );
}
const Wrapper = styled.div `
margin: 4rem 0rem;
text-decoration: none;

`

const Card = styled.div`
text-decoration: none;
border-radius: 1rem;
width: 100%
overflow: hidden;
`


export default Popular