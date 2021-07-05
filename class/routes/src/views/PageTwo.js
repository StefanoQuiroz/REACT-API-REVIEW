import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PageTwo = () => {
    let { id } = useParams();
    return (
        <div>
            <p>You are in Page Two and { id }</p>
            <Link to="/page-one">Go to Page One</Link>
        </div>
    );
}

export default PageTwo;
