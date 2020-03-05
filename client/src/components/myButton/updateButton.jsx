import React, { Component } from 'react';
import axios from 'axios';

class UpdateButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            age: this.props.age,
            id: this.props.id
        }
    }

    update = e => {
            e.preventDefault();
            const employee = {
                name: this.state.name,
                age: this.state.age,
                id: this.state.id,
            }
            axios.put('http://dummy.restapiexample.com/api/v1/update/{this.state.id}', employee)
            .then(res => console.log(res.data));
        }

    render() { 
        return (
            <button value={this.props.update} onClick={this.update} >Atualizar</button>
        );
    }
}
 
export default UpdateButton;