import React, { useEffect, useState } from 'react';

const Select = () => {
    const [options, setOptions] = useState([]);


    useEffect(() => {
        const fetchOptions = async () => {
            try{
                const response = await fetch("https://swapi.dev/api/");
                const json = await response.json();
                //console.log(Object.entries(json));
                return Object.entries(json);
            }
            catch(err){
                throw err;
            }
        }

        fetchOptions().then(res => setOptions(res))
    }, [])

    const option = options && options.map(([key, value], index) => (<option key={index} value={value}>{key.replace(/\b\w/g, c=> c.toUpperCase())}</option>))
    return (
        <>  
            <div>
                <label htmlFor="select"></label>
                <select name="categories" id="select">
                    {option}
                </select>
            </div>  
        </>
    );
}

export default Select;
