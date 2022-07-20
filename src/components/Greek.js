import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Splide, SplideSlide} from  '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"

function Greek() {

    const [greek, setGreek] = useState([]);

    useEffect(() => {
        getGreek();
        }, []);
        
            const getGreek = async () => {
                const api = await fetch(`https://api.spoonacular.com/recipes/greek?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
                const data = await api.json();
                setGreek(data.recipes)
            };

  return (
    <div>
           <Wrapper> 
            <h3>Greek Recipes</h3>

            <Splide options={{
                perPage: 4,
            }}>
            {greek.map((recipe) => {
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
border-radius: 2rem;
`

export default Greek