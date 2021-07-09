import React from 'react';

const HookData = props => {
    const {firstName, lastName, email, password, confirmPassword} = props.data;

    return (
        <div>
            <p>Your Form Data</p>
            <p> First Name: {firstName}</p>
            <p> Last Name: {lastName}</p>
            <p> Email Address: {email}</p>
            <p> Password: {password}</p>
            <p> Confirm Password: {confirmPassword}</p>
        </div>
    );
}

export default HookData;