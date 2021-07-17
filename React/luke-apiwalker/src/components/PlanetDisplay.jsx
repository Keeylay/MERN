import React from 'react';

const PlanetDisplay = (props) => {

    return(
        <div>
            {props.planetData.map((planet) => {
                if( isNaN(`${planet.population}`) ){
                    return(
                        <div key={planet}>
                            <div>
                                <h2 key = {planet.index}>{planet.name}</h2>
                                <p>Population: {planet.population}</p>
                                <p>Terrain: {planet.terrain}</p>
                            </div>
                        </div>
                    )
                } else {
                    return(
                        <div>
                            <h2 key = {planet.index}>{planet.name}</h2>
                            <p>Population: {planet.population}</p>
                            <p>Terrain: {planet.terrain}</p>
                            <p>Climate: {planet.climate}</p>
                            <p>Gravity: {planet.gravity}</p>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default PlanetDisplay;