import React, { useContext } from 'react';
import { MyContext } from '../App';
import Select from '../components/Select';
import InputLabel from '../components/InputLabel';
import Search from '../components/Search';
import {Form} from 'reactstrap';

const Menu = () => {

    const {setInfo, setEncontrado} = useContext(MyContext);
   

    const onChange = (event) => {
        const form = event.target.closest("Form");
        const formData = new FormData(form);
        const data = {};
        for (const [key, value] of formData.entries()){
            data[key] = value;
        }
        return data.categories+data.id;
         
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try{
            const url = onChange(event);
            //console.log(url);
            const fetchInfo = async (url) => {
            try{
                const res = await fetch(url);
                if(!res.ok){
                    throw new Error("No encontrado");
                }
                const json = await res.json();
                const entries = Object.entries(json);
                return entries.slice(0,6);
            }
            catch(err){
                throw err;
            }
            }
            const array = await fetchInfo(url);
            //console.log(array);
            const [[,title]] = array;
            setInfo({
                title,
                paraph: array.slice(1)
            })
        }
        catch{
            //setInfo({title: "No encontrado"})
            setEncontrado(false);
        }
    }

    return (
        <Form inline onSubmit={onSubmit} onChange={onChange}>
            <Select/>
            <InputLabel/>
            <Search/>    
        </Form>
    );
}

export default Menu;
