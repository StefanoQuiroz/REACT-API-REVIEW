import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [nombres, setNombres] = useState([]);
    
    useEffect( () => {
        fetch("https://swapi.dev/api/people/")
            .then(response => response.json())
            .then(response => setNombres(response.results))
            .catch(err => console.error(err));
    }, [])
    //console.log(nombres);
    
    //const lista = nombres.length>0 && nombres.map((items, index) => (<p key={index}>{items.name}</p>));
    const lista = (nombres.length>0) ? nombres.map((item, index) => (<p key={index}>{item.name}</p>)) : "";

    return (
        <div>
            <h1>StarWars Names</h1>
            {lista}
        </div>
    );
}

export default UseEffect;
