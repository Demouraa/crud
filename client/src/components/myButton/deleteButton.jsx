import React, { Component } from 'react';
import axios from 'axios';

class DeleteButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0
        }
    }

    onDelete = async e => {
        e.preventDefault();
        await this.setState({id: this.props.delete})
        console.log(this.state.id)

        axios.delete(`/users/${this.state.id}`)
            .then(res => console.log(res, res.data))
    }

    render() { 
        return (
            <button value={this.props.delete} onClick={(e) => { 
                if (window.confirm('Você realmente quer deletar?')){
                    this.onDelete(e)
                }
                }}> Deletar </button>
        );
    }
}
 
export default DeleteButton;