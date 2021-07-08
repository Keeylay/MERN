import React, {Component} from 'react';

class PersonCard extends Component {
    render (){
        return (
            <div className="personCard">
                <div>
                    <h1><b>{this.props.lastName}, {this.props.firstName}</b></h1>
                    <p>Age: {this.props.age}</p>
                    <p> Hair Color: {this.props.hairColor}</p>
                </div>
            </div>
        )
    }
}

export default PersonCard;