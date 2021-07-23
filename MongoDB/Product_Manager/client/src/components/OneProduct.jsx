import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const OneProduct = (props) => {
    const [productInfo, setProductInfo] = useState ({})
    const [error, setError] = useState ()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props._id}`)
            .then(res => {
                if (res.data.error) {
                    setError(res.data.error)
                } else {
                    setProductInfo(res.data.products)
                }

            })
            .catch(err => console.log('Somethings wrong with Axios call', err))
    }, []);

    const deleteProduct = (e) => {
        axios.delete(`http://localhost:8000/api/product/${props._id}`)
        .then(res => {
            navigate ('/api/product/')
        })
        .catch(err => console.log('Somethings wrong with Axios call', err))
    }

    return (
        <div>
            {!error?
            <>
                <h3>Product Details</h3>
                <p>Product Id: {props._id}</p>
                <div>
                    <h4> Product: {productInfo.title}</h4>
                    <p>Price: ${productInfo.price}</p>
                    <p>Product Description: {productInfo.description}</p>
                </div>
                <button onClick = {deleteProduct} className = "btn btn-dark">Delete</button>
            </> : <h1>Nope not found</h1>
            }
        </div>
        
    );
};


export default OneProduct;