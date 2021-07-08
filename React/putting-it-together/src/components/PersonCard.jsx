import React, {Component} from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = { age: props.age }
    }

    render (){

        const addYear = () => {
            this.setState({
                age: (this.state.age) +1
            })
        }

        return (
            <div className="personCard">
                <div>
                    <h1><b>{this.props.lastName}, {this.props.firstName}</b></h1>
                    <p>Age: {this.state.age}</p>
                    <p> Hair Color: {this.props.hairColor}</p>
                </div>
                <div>
                    <button onClick = {addYear}>Birthday Button for { this.props.firstName } { this.props.lastName }</button>
                </div>
            </div>
        )
    }
}

export default PersonCard;