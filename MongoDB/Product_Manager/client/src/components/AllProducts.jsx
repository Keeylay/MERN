import Reach, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([])
    const [deleteItem, setDeleteItem] = useState(false)

    useEffect( () => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setAllProducts(res.data.products)
        })
            .catch(err => console.log('Somethings wrong with Axios call', err))
        }, [deleteItem])

    const deleteProduct = (e, productid) => {
        axios.delete(`http://localhost:8000/api/product/${productid}`)
        .then(res => {
            setDeleteItem(!deleteItem)
        })
        .catch(err => console.log('Somethings wrong with Axios call', err))
    }

    allProducts.sort((a, b) => {
        var titleA = a.title.toUpperCase();
        var titleB = b.title.toUpperCase();
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    })

    return (
        <div>
            <h3>Product Manager</h3>
            { allProducts.map( (p, i) => {
                return <div key = {i} class="card">
                    <div class="card-body">
                        <h4 class="card-title"><Link to = {`/api/product/${p._id}`} class="" style = {{textDecoration: "none", color: "black"}}>{p.title}</Link></h4>
                        <h6 class="card-subtitle mb-2 text-muted">Price: {p.price}</h6>
                        <p class="card-text">{p.description}</p>
                        <Link to = {`/api/product/${p._id}`} class="card-link">{p.title}</Link>
                        <Link to = {`/api/product/edit/${p._id}`} class="card-link">Edit Product Info</Link>
                        <button onClick = { (e) => deleteProduct(e, p._id)} className = "btn btn-link">Delete Product</button>
                </div>
            </div>
            })}
        </div>
    )
    
}

export default AllProducts;