import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import Results from './Results';
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


export const MyContext = createContext();


const Select = () => {
    //Hooks section
    const classes = useStyles();
    const [starwars, setStarWars]=useState([])
    const [state, setState] = useState({
        input: 0,
        selectOption: ""
    });

    const [resultProps, setResultProps] = useState({
        title: "",
        paraph: []
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
            .then(res => setStarWars(Object.entries(res.data)))
    }, [])


    const onChange = (event) => {
        const {name, value} = event.target;
        setState({
            ...state,
            [name] : value
        })
        return state.selectOption+state.id
    } 


    const onSubmit = (event) => {
        event.preventDefault();
        const url = onChange(event);
        //console.log(state);
        
        
        const arr = axios.get(url)
            .then(res => Object.entries(res.data))
            .catch(err => console.error(err));
            
        console.log(arr);
        const [[,title]] = arr;
        setResultProps({
            title,
            paraph: arr.slice(1)
        })
    }

    //console.log(starwars.options);
    //Object.entries {propiedad} => [propiedad]
    const option = starwars && starwars.map(([value, url], index) => (<option key={index} value={url}>{value.replace(/\b\w/g, c => c.toUpperCase())}</option>))
    
    return (
        <>
            <form onSubmit = {onSubmit}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="search"></InputLabel>
                    <NativeSelect id="select" name="selectOption" value={state.select} onChange={onChange} >
                        {option}
                    </NativeSelect>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="id">Id </InputLabel>
                    <Input id="id" type="number" name="input" /* value={state.input} */ onChange={onChange}/>
                </FormControl>
                <Button type="submit" variant="contained" color="default" className={classes.button} endIcon={<SendIcon/>}>Send</Button>
            </form>
            <MyContext.Provider value={{resultProps}}>
                <Results/>
            </MyContext.Provider>
        </>
    );
}

export default Select;
