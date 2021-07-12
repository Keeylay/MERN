import React, {useState} from 'react';

const HookForm = props => {
    const {inputs, setInputs} = props;

    const onChange = (e) => {
        setInputs({ 
            ... inputs, 
            [e.target.name]: e.target.value })
    }

    const firstNameValid = (inputs) => {
        if (inputs.length < 2 && inputs.length !== 0) {
            return false;
        }
        return true;
    }
    const lastNameValid = (inputs) => {
        if (inputs.length < 2 && inputs.length !== 0) {
            return false;
        }
        return true;
    }
    const emailValid = (inputs) => {
        if (inputs.length < 2 && inputs.length !== 0) {
            return false;
        }
        return true;
    }
    const passwordValid = (inputs) => {
        if (inputs.length < 6 && inputs.length !== 0) {
            return false;
        }
        return true;
    }
    const confirmPasswordValid = (inputs) => {
        if (inputs.confirmPassword !== inputs.password) {
            return false;
        }
        return true;
    }

        return (
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input onChange={onChange} type='text' name="firstName" />
                {!firstNameValid(inputs.firstName) && <span className="alert-danger">You need at least 2 Characters!</span>}
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input onChange={onChange} type='text' name="lastName"/>
                {!lastNameValid(inputs.lastName) && <span className="alert-danger">You need at least 2 Characters!</span>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input onChange={onChange} type='text' name="email"/>
                {!emailValid(inputs.email) && <span className="alert-danger">You need at least 2 Characters!</span>}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input onChange={onChange} type='password' name="password"/>
                {!passwordValid(inputs.password) && <span className="alert-danger">You need at least 8 Characters!</span>}
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input onChange={onChange} type='password' name="confirmPassword"/>
                {!confirmPasswordValid(inputs.confirmPassword) && <span className="alert-danger">Passwords much match!</span>}
            </div>
            <div>
                <input onClick={onChange} type="submit" value = "Submit"/>
            </div>
        </form>
    )
}

export default HookForm;