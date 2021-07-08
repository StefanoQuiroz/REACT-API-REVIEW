import React, { useContext } from 'react';
import { MyContext } from './Select';


const Results = (props) => {
    //const {titulo, paraph} = props;
    const {resultProps} = useContext(MyContext);
    const lista = resultProps.paraph.map(([key, value], index) => (<p key={index}><strong>{key} :</strong>{value}</p>));
    return (
        <div>
            <h1>{resultProps.title}</h1>
            {lista}
        </div>
    );
}

export default Results;
