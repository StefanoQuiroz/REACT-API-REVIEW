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
        <form>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="search"></InputLabel>
                <NativeSelect labelId="search" id="select">
                    {option}
                </NativeSelect>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="id">Id </InputLabel>
                <Input id="id" type="text"/>
            </FormControl>
            <Button variant="contained" color="default" className={classes.button} endIcon={<SendIcon/>}>Send</Button>
        </form>
    );
}

export default Select;
