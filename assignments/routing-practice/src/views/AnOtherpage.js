import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    border: 2px solid black;
    margin: 2rem 1rem;
    background-color: ${props => props.bcolor};
`;

const P = styled.div`
    
    color: ${props => props.color};
    font-weight: 600;
    font-size: 1.3rem;

`;

const AnOtherpage = () => {
    const {id, color, background} = useParams()
    return (
        <Div bcolor={background}>
            <P color={color}>The world is: {id}</P>
        </Div>
    );
}

export default AnOtherpage;
