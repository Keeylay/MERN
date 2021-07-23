import { navigate, Link } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react';

const AddPet = () => {
    const [formInfo, setFormInfo] = useState ({
        title:"",
        type:"",
        description: "",
        skills1: "",
        skills2: "",
        skills3: ""
    })

    const [formErrors, setFormErrors] = useState ({})

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pet/new', formInfo)
        .then ( res => {
            // console.log("*****************************", res)
            if (res.data.error) {
                setFormErrors(res.data.error.errors)
                } else {
                    navigate ('/')
            }
        })
        .catch(err => console.log('Somethings wrong with Axios call', err)) 
    }

    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo, 
            [e.target.name]:e.target.value
        })
    }

    return (
        <div className = "container">
            <h3>Know a pet needing a good home?</h3>
            <Link to = "/" className = "card-link">Home</Link>
            <form onSubmit = {submitHandler}> 
                <div className = "form-group">
                    <label>Name:</label>
                    <input onChange = {changeHandler} type = "text" name = "title" id = "" className = "form-control" />
                    <p className = "alert-danger">{formErrors.title? formErrors.title.message:null}</p>
                </div>
                <div className = "form-group">
                    <label>Type:</label>
                    <input onChange = {changeHandler} type = "text" name = "type" id = "" className = "form-control" />
                    <p className = "alert-danger">{formErrors.type? formErrors.type.message:null}</p>
                </div>
                <div className = "form-group">
                    <label>Description:</label>
                    <textarea onChange = {changeHandler} name="description" id="" cols="20" rows="5" className ="form-control" />
                    <p className = "alert-danger">{formErrors.description? formErrors.description.message:null}</p>
                </div>
                <div className = "form-group">
                    <h4>Skills (optional):</h4>
                    <label>Skill 1:</label>
                    <input onChange = {changeHandler} type = "text" name = "skills1" id = "" className = "form-control" />
                    <label>Skill 2:</label>
                    <input onChange = {changeHandler} type = "text" name = "skills2" id = "" className = "form-control" />
                    <label>Skill 3:</label>
                    <input onChange = {changeHandler} type = "text" name = "skills3" id = "" className = "form-control" />
                </div>
                <input type = "submit" value = "Add Pet" />
            </form>
        </div>
    )
};

export default AddPet;


