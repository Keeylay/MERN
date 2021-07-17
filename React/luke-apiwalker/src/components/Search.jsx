import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import img from '../assets/ANH-Ben-identification.png';

const Search = (props) => {
    const [optionValue, setOptionValue] =useState('person');
    const personUrl = 'http://swapi.dev/api/people/'
    const planetUrl = 'http://swapi.dev/api/planets/'
    const [id, setId] = useState(0)

    const onChangeHandler = (e, selectionValue) => {
        setOptionValue(selectionValue);
    }

    const handleSubmit = (e, id) => {
        e.preventDefault();
        let value = optionValue;
        if (value == "person") {
            getPerson(id);
            navigate(`/${optionValue}/${id}`);
        } else {
            getPlanet(id);
            navigate(`/${optionValue}/${id}`);
        }
        e.target[1].value = "";
    }

    const getPerson = (value) => {
        return new Promise((resolve, reject) => {
            let url = (personUrl + value)
            fetch(url)
                .then(res => {
                    if (res.status === 200) {
                        return res.json()
                    } else {
                        throw new Error("These aren't the droids you're looking for")
                        return( 
                            <div> 
                                <img src={img} />
                            </div>)
                    }
                })
                .then(data => {
                    props.onPersonSearch(data);
                    resolve(data);
                })
                .catch(err => alert(err.message))
        })
    }

    const getPlanet = (value) => {
        return new Promise((resolve, reject) => {
            let url = (planetUrl + value)
            fetch(url)
                .then(res => {
                    if (res.status === 200) {
                        return res.json()
                    } else {
                        // throw new Error("These aren't the droids you're looking for");
                        throw new Error(img)
                    }
                })
                .then(data => {
                    props.onPlanetSearch(data);
                    resolve(data);
                })
                .catch(err => alert(err.message))
        })
    }

    console.log(id, optionValue)


    return (
        <div>
            <form onSubmit = { (e) => handleSubmit(e, e.target[1].value) }>
                <div>
                    <label>Search: </label>
                    <select onChange = { (e) => onChangeHandler (e, e.target.value) } className = "selectSelect" placeholder = "Name">
                        <option className = "optionValue" value = "person"> Person</option>
                        <option className = "optionValue" value = "planet">Planet</option>
                    </select>
                </div>
                <div>
                    <label className = "labelInput">Id:</label>
                    <input className = "inputofinputs" onChange = { (e) => setId(e.target.value) }/>
                    <button>Search</button>
                </div>
                
            </form>
        </div>
    )
}

export default Search;