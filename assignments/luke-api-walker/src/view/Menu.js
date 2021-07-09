import React, { useContext } from 'react';
import { MyContext } from '../App';
import Select from '../components/Select';
import Input from '../components/Input';
import Search from '../components/Search';

const Menu = () => {

    const {setInfo, setEncontrado} = useContext(MyContext);
   

    const onChange = (event) => {
        const form = event.target.closest("form");
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
        <form onSubmit={onSubmit} onChange={onChange}>
            <Select/>
            <Input/>
            <Search/>    
        </form>
    );
}

export default Menu;
