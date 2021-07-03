import React, { useEffect, useState } from 'react';

const UseEffects = () => {
    const [state, setState] = useState({
        people: []
    });
    useEffect(() => {
        console.log("The render")
        fetch("https://swapi.dev/api/people/")
            .then(res => res.json())
            .then(res => setState({
                people: res.results
            }))
            .catch(err => console.error(err));
    }, [])
    //console.log(state.people)
    const listaStarWars = (state.people) ? state.people.map((item, index) => (<p key={index}>{item.name}</p>)) : null
    return (
        <div>
            {listaStarWars}
        </div>
    );
}

export default UseEffects;
