import React, { useEffect, useState } from 'react';
import {FormGroup, Label, Input} from 'reactstrap';
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
            <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="select" className="mr-sm-2"></Label>
                <Input type="select" name="categories" id="select">
                    {option}
                </Input>
            </FormGroup>
    );
}

export default Select;
