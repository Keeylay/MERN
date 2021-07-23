import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const OnePet = (props) => {
    const [petInfo, setPetInfo] = useState ({})
    const [error, setError] = useState ()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props._id}`)
            .then(res => {
                if (res.data.error) {
                    setError(res.data.error)
                } else {
                    setPetInfo(res.data.pets)
                }

            })
            .catch(err => console.log('Somethings wrong with Axios call', err))
    }, []);

    const deletePet = (e) => {
        axios.delete(`http://localhost:8000/api/pet/${props._id}`)
        .then(res => {
            navigate ('/')
        })
        .catch(err => console.log('Somethings wrong with Axios call', err))
    }

    return (
        <div>
            {!error?
            <>
                <h3>Pet Details {petInfo.title}</h3>
                <Link to = "/" className = "card-link">Home</Link>
                <button onClick = {deletePet} className = "btn btn-warning">Adopt {petInfo.title}</button>
                <div>
                    <p>Type: ${petInfo.type}</p>
                    <p>Pet Description: {petInfo.description}</p>
                    <p>Skills: {petInfo.skills1}, {petInfo.skills2}, {petInfo.skills3}</p>

                </div>
            </> : <h1>Nope not found</h1>
            }
        </div>
        
    );
};


export default OnePet;