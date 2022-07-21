import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {Splide, SplideSlide} from  '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"



function Popular() {

const [popular, setPopular] = useState([]);

useEffect(() => {
getPopular();
}, []);

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
        const data = await api.json();
        setPopular(data.recipes)
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
                       <img src={recipe.image} alt={recipe.title} />
                       <p>{recipe.title}</p> 
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
margin: 4rem 0rem;`

const Card = styled.div`
min-height: 25rem;
border-radius: 1rem;
width: 100%
`


export default Popular