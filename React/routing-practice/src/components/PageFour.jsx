import React from 'react';
import { Link } from '@reach/router';

const PageFour = (props) => {
    const {word, backColor, wordColor} = props;
    return (
        <div>
        <p style = {{ color: wordColor, backgroundColor: backColor }}> {word}</p>
        <Link to = "/home"> Go back to Home</Link>
        </div>
    );
}

export default PageFour;