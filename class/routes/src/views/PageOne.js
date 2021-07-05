import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const PageOne = () => {
    const onClick = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <p>You are in Page One</p>
            <Link to ="/page-two">Go to page Two</Link>
            <button onClick={onClick}><NavLink to="/">Home</NavLink></button>
        </div>
    );
}

export default PageOne;
