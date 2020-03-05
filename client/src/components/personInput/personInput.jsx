import React, { Component } from 'react';
import axios from 'axios';

class PersonInput extends Component {
    state = { 
        name: '',
        age: '',
    }

    handleChange = event => {
        this.setState({ 
            name: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post('/users', {
            name: this.inputname.value.toUpperCase(),
            age: this.inputage.value
        })
        .then( res => {
            console.log(res);
            console.log(res.data);
        })
        .catch( error => console.log(error) );


        this.inputname.value = '';
        this.inputage.value =  '';
    }

    render() { 
        return ( 
            <div>
                <h1>Lista de Usuarios</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" name="name"  ref={ inname => this.inputname = inname} />
                    </label>

                    <label>
                        Person Age:
                        <input type="number" name="age"  ref={ inage => this.inputage = inage} />
                    </label>

                    <button type="submit">Adicionar</button>
                </form>
            </div>
        );
    }
}
 
export default PersonInput;