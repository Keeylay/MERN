import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react';

const AddProduct = () => {
    const [formInfo, setFormInfo] = useState ({
        title:"",
        price:"",
        description: ""
    })

    const [formErrors, setFormErrors] = useState ({})

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/new', formInfo)
        .then ( res => {
            if (res.data.error) {
                setFormErrors(res.data.error.errors)
                } else {
                    navigate ('/api/product/')
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
            <h3>Use this form to upload new products</h3>
            <form onSubmit = {submitHandler}> 
                <div className = "form-group">
                    <label>Title:</label>
                    <input onChange = {changeHandler} type = "text" name = "title" id = "" className = "form-control" />
                    <p className = "alert-danger">{formErrors.title? formErrors.title.message:null}</p>
                </div>
                <div className = "form-group">
                    <label>Price:</label>
                    <input onChange = {changeHandler} type = "text" name = "price" id = "" className = "form-control" />
                    <p className = "alert-danger">{formErrors.price? formErrors.price.message:null}</p>
                </div>
                <div className = "form-group">
                    <label>Description:</label>
                    <textarea onChange = {changeHandler} name="description" id="" cols="20" rows="5" className ="form-control" />
                    <p className = "alert-danger">{formErrors.description? formErrors.description.message:null}</p>
                </div>
                <input type = "submit" value = "Product Submit" />
            </form>
        </div>
    )
};

export default AddProduct;


