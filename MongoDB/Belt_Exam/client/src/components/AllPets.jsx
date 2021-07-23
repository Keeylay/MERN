import Reach, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const AllPets = () => {
    const [allPets, setAllPets] = useState([])

    useEffect( () => {
        axios.get('http://localhost:8000/api/pet')
            .then(res => {
                // console.log("*****************************", res)
                setAllPets(res.data.pets)
        })
            .catch(err => console.log('Somethings wrong with Axios call', err))
        }, [])

    allPets.sort((a, b) => {
        var typeA = a.type.toUpperCase();
        var typeB = b.type.toUpperCase();
        if (typeA < typeB) {
            return -1;
        }
        if (typeA > typeB) {
            return 1;
        }
        return 0;
    })

    return(
        <div>
            <h2>These pets are looking for a good home</h2>
            <Link to = {`/api/pet/new`} className = "card-link">add a pet to the shelter</Link>
                    <div>
                        <table className="table table-reflow">
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { allPets.map( (p, i) => {
                                    return (
                                    <tr>
                                    <td>{p.title}</td>
                                    <td>{p.type}</td>
                                    <td><Link to = {`/api/pet/${p._id}`} className = "card-link">Details</Link> | <Link to = {`/api/pet/edit/${p._id}`} className = "card-link">Edit</Link></td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                    </div>
                
        </div>
    )
}

export default AllPets;