import React, { useContext } from 'react';
import { MyContext } from '../App';
import NoEncontrado from './NoEncontrado';
const Result = () => {
    const {info, encontrado} = useContext(MyContext);
    const listParaph = info.paraph && info.paraph.map(([key, value], index)=>(<p key={index}><strong>{key.replace(/\b\w/g, c=> c.toUpperCase())} :</strong>{value}</p>)) 
    return (
        <>
            {(encontrado) ?  
            <div>
                 <h1>{info.title}</h1>
                 {listParaph}                
            </div> : <NoEncontrado/>}   
        </>
    );
}

export default Result;
