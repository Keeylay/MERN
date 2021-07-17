import React from 'react';
import { Link } from '@reach/router';

const PageThree = (props) => {
    const {word} = props;
    return (
        <div>
        <p> The word is: {word}</p>
        <Link to = "/home"> Go to Home Page</Link>
        </div>
    );
}

export default PageThree;