import React from 'react';
import { useParams } from 'react-router-dom';

const OtherPage = () => {
    const {id} = useParams();
    const numberOrString = () => {
        return (isNaN(id)) ? `The word is ${id}` : `The number is ${id}`;
    }
    return (
        <div>
            <p>{numberOrString()}</p>
        </div>
    );
}

export default OtherPage;
