import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Splide, SplideSlide} from  '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from 'react-router-dom'

function Mediterranean() {

    const [mediterranean, setMediterranean] = useState([]);

    useEffect(() => {
        getMediterranean();
        }, []);
        
            const getMediterranean = async () => {
                const check = localStorage.getItem('mediterranean');

                if(check){
                    setMediterranean(JSON.parse(check));
                }else{
                const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=mediterranean`);
                const data = await api.json();
                setMediterranean(data.recipes)

            localStorage.setItem('mediterranean', JSON.stringify(data.recipes));
            };
        }

  return (
    <div>
           <Wrapper> 
            <h3>Mediterranean Recipes</h3>

            <Splide options={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: 'free',
            }}>
            {mediterranean.map((recipe) => {
                return (
                    <SplideSlide key={recipe.id}>
                    <Card>
                    <Link to={'/recipe/' + recipe.id}>
                       <img src={recipe.image} alt={recipe.title} />
                       <p>{recipe.title}</p> 
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
margin: 4rem 0rem;`

const Card = styled.div`

border-radius: 1rem;
width: 100%
`

export default Mediterranean