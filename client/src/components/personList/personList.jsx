import React, { Component } from 'react';
import axios from 'axios';
import PersonInput from '../personInput/personInput';
import DeleteButton from '../myButton/deleteButton';
import UpdateButton from '../myButton/updateButton';

class PersonList extends Component {
    state = { 
        persons: [],
        status: true,
    }

    componentDidMount(){
        axios.get('/users')
            .then( res => {
                this.setState({persons: res.data});
            });
    }

    render() { 
        return ( 
            <div>
                <PersonInput />
                <h1>Lista de Usuarios</h1>
                <ul>
                    {this.state.persons.map(person =>
                        <li key={person.id}>Nome: {person.name}. Idade: {person.age}.
                            <UpdateButton name={person.name} age={person.age} id={person.id} />
                            <DeleteButton delete={person.id}/>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}
 
export default PersonList;