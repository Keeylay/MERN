import React from 'react';
import { navigate  } from '@reach/router';

const PeopleDisplay = (props) => {

    const onClick = (e, url) => {
        e.preventDefault();
        getPlanet(url);
    }

    const getPlanet = (url) => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => {
                    if (res.status === 200) {
                        return res.json()
                    } else {
                        throw new Error("These aren't the droids you're looking for")
                    }
                })
                .then(data => {
                    props.onPlanetSearch(data);
                    resolve(data);
                })
                .catch(err => alert(err.message))
                let id = props.id
                console.log(id)
                navigate(`/planet/${id}`)
        })
    }

    console.log(props.personData)

    return(
        <div>
            {props.personData.map((person) => {
                return(
                    <div>
                    <h1 className="personName" key = {person.index}>{person.name} </h1>
                    <p className='homeWorld' onClick = { (e) => onClick(e, person.homeworld)}>Home World: {person.homeworldName}</p>


                    {/* <Link to={"/planets/" + person.homeworld}>Home World</Link> */}

                    <p>Born: {person.born}</p>
                    <p>Hair Color: {person.haircolor}</p>
                    <p>Mass: {person.mass}</p>
                    <p>Eye Color: {person.eye_color}</p>
                    </div>
                )   
            })}
        </div>
    )
}

export default PeopleDisplay;