import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Splide, SplideSlide} from  '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"

function Vegetarian() {

    const [vegetarian, setVegetarian] = useState([]);

    useEffect(() => {
        getVegetarian();
        }, []);
        
            const getVegetarian = async () => {
                const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`);
                const data = await api.json();
                setVegetarian(data.recipes)
                console.log(data)
            };

  return (
    <div>
           <Wrapper> 
            <h3>Vegetarian Recipes</h3>

            <Splide options={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: 'free',
            }}>
            {vegetarian.map((recipe) => {
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
export default Vegetarian