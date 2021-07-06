import React, { useEffect, useState } from 'react';

const Select = () => {

    const [starwars, setStarWars]=useState({
        options: []
    })

    useEffect(()=>{
        fetch("https://swapi.dev/api/")
            .then(res => res.json())
            .then(res => setStarWars({
                options: Object.entries(res)
            }))
    }, [])
    console.log(starwars.options);
    //Object.entries {propiedad} => [propiedad]
    const option = starwars.options.map(([value, url], index) => (<option key={index} value={url}>{value.replace(/\b\w/g, c => c.toUpperCase())}</option>))


    return (
        <form>
            <div>
                <label htmlFor="search">Search for: </label>
                <select id="search" name="select">
                    {/* <option value="People">People</option>
                    <option value="Films">Films</option>
                    <option value="Starships">Starships</option>
                    <option value="Vehicles">Vehicles</option>
                    <option value="Species">Species</option> */}
                    {option}
                </select>
            </div>
            <div>
                <label htmlFor="id">id </label>
                <input type="number"/>
                <input type="submit" value="Search"/>
            </div>                        
        </form>
    );
}

export default Select;
