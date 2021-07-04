import React, { useState } from 'react';
import styled from 'styled-components';
const Container = styled.div`
    margin: 0 auto;
`;

const Button = styled.button`
    display: flex;
    margin: 1rem auto;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.2rem;
    border-radius: 10px;
    background-color: #9c9c9c ;
    outline: none;
    padding: 0.6rem 2.5rem;
    border-style: none;
    :focus{
        outline: none;
    }
`;


const Ul = styled.ul`
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Li = styled.li`
    width: 10%;
    justify-content: center;
    color: green;
    font-style: italic;
    font-size: 1.5rem;
    text-transform: capitalize;
`;

const Pokemon = () => {
    const [pokemons, setPokemons] = useState({
        pokemonsList: []
    });

    const onClick = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=1118")
            .then(res => res.json())
            .then(res => setPokemons({
                pokemonsList: res.results
            }))
            .catch(err => console.error(err));
    }

    const pokemonList = (pokemons.pokemonsList) ? pokemons.pokemonsList.map((item, index) => (<Li key={index}>{item.name}</Li>)) : null;

    return (
        <Container>
            <Button onClick={onClick}>Fetch Pokemon</Button>
            <Ul>{pokemonList}</Ul>
        </Container>
    );
}

export default Pokemon;
