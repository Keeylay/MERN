import React from 'react';
import { Link } from '@reach/router';

const PageTwo = (props) => {
    return (
        <div>
        <p> You are on Page {props.num}</p>
        <Link to = "/hello/blue/red"> Go to Page Four </Link>
        </div>
    );
}

export default PageTwo;