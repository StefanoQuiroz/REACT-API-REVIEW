import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles, FormControl, InputLabel, NativeSelect, Input, Button} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(3),
    },
    button: {
        marginTop: theme.spacing(3)
    }
  }));

const Select = () => {
    const classes = useStyles();
    const [starwars, setStarWars]=useState({
        options: []
    })

    const [state, setState] = useState({
        input: 0,
        select: ""
    });

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


    const onChange = (event) => {
        const {name, value} = event.target;
        setState({
            ...state,
            [name] : value
        })
    } 


    const onSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    }

    //console.log(starwars.options);
    //Object.entries {propiedad} => [propiedad]
    const option = starwars.options && starwars.options.map(([value, url], index) => (<option key={index} value={url}>{value.replace(/\b\w/g, c => c.toUpperCase())}</option>))
    
    return (
        <form onSubmit = {onSubmit}>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="search"></InputLabel>
                <NativeSelect labelId="search" id="select" name="selectOption" value={state.select} onChange={onChange} >
                    {option}
                </NativeSelect>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="id">Id </InputLabel>
                <Input id="id" type="number" name="input" value={state.input} onChange={onChange}/>
            </FormControl>
            <Button variant="contained" color="default" className={classes.button} endIcon={<SendIcon/>}>Send</Button>
        </form>
    );
}

export default Select;
