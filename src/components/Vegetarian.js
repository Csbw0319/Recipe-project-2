import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Splide, SplideSlide} from  '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from 'react-router-dom'


function Vegetarian() {

    const [vegetarian, setVegetarian] = useState([]);

    useEffect(() => {
        getVegetarian();
        }, []);
        
            const getVegetarian = async () => {
                const check = localStorage.getItem('vegetarian');

                if(check){
                    setVegetarian(JSON.parse(check));
                }else{
                    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`);
                const data = await api.json();
                setVegetarian(data.recipes)

                localStorage.setItem('vegetarian', JSON.stringify(data.recipes));
                }
               
            
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
                      <Link className='link' to={'/recipe/' + recipe.id}>
                       <img className='image' src={recipe.image} alt={recipe.title} />
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
margin: 4rem 1rem;`

const Card = styled.div`

border-radius: 1rem;
width: 100%
`
export default Vegetarian