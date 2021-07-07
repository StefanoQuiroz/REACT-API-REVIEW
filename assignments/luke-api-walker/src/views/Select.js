import React, { useEffect, useState } from 'react';
import { Form, Input, FormGroup, Label, Button } from 'reactstrap'; 
import axios from 'axios';

const Select = () => {

    const [starwars, setStarWars]=useState({
        options: []
    })

    /* useEffect(()=>{
        fetch("https://swapi.dev/api/")
            .then(res => res.json())
            .then(res => setStarWars({
                options: Object.entries(res)
            }))
    }, []) */
    
    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
            .then(res => setStarWars({
                options: Object.entries(res.data)
            }))
}, [])


    console.log(starwars.options);
    //Object.entries {propiedad} => [propiedad]
    const option = starwars.options && starwars.options.map(([value, url], index) => (<option key={index} value={url}>{value.replace(/\b\w/g, c => c.toUpperCase())}</option>))


    return (
        <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="search" className="mr-sm-2">Search for: </Label>
                <Input type="select" id="search" name="select">
                    {option}
                </Input>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="id" className="mr-sm-2">id </Label>
                <Input type="number" id="id"/>
            </FormGroup>
            <Button>Search</Button>
        </Form>
    );
}

export default Select;
