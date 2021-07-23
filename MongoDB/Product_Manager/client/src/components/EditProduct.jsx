import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditProduct = (props) => {
    
    const [productInfo, setProductInfo] = useState({
        title:"",
        price:"",
        description: ""
    }) 

    const [errors, setErrors] = useState ({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props._id}`)
        .then(res => {
            setProductInfo(res.data.products)
        })
        .catch(err => console.log('Somethings wrong with Axios call', err))
    }, [])

    const changeHandler = (e) => {
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/edit/${props._id}`, productInfo)
            .then (res => {
                console.log('************************', res)
                if (res.data.error) {
                    setErrors(res.data.error.errors)
                } else {
                    setProductInfo(res.data.product)
                    navigate('/api/product/')
                }
            })
            .catch(err => console.log('Somethings wrong with Axios call', err))
    }

    return (
        <div>   
            <h2>Edit product</h2>
            <div className = "container">
                <form onSubmit = {submitHandler}> 
                    <div className = "form-group">
                        <label>Title:</label>
                        <input onChange = {changeHandler} type = "text" name = "title" id = "" className = "form-control" value = {productInfo.title} />
                        <p className = "alert-danger">{errors.title? errors.title.message:null}</p>
                    </div>
                    <div className = "form-group">
                        <label>Price:</label>
                        <input onChange = {changeHandler} type = "text" name = "price" id = "" className = "form-control" value = {productInfo.price} />
                        <p className = "alert-danger">{errors.price? errors.price.message:null}</p>
                    </div>
                    <div className = "form-group">
                        <label>Description:</label>
                        <textarea onChange = {changeHandler} name="description" id="" cols="20" rows="5" className ="form-control" value = {productInfo.description} />
                        <p className = "alert-danger">{errors.description? errors.description.message:null}</p>
                    </div>
                    <input type = "submit" value = "Submit Edits" />
                </form>
            </div>
        </div>
    );
};

export default EditProduct;