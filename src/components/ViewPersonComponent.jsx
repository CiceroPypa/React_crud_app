import React, { Component } from 'react';
import PersonService from '../services/PersonService';

class ViewPersonComponent extends Component {
   
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            person: {}
        }
    }

    componentDidMount(){
        PersonService.getPersonById(this.state.id).then( (res) =>{
            this.setState({person: res.data})
        })
    }

    cancel(){
        this.props.history.push('/people');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Vies Person Datails</h3>
                    <div className="card-body">
                        <div className="row">
                            <lable>Name: {this.state.person.name}</lable>
                        </div>
                        <div className="row">
                            <lable>Age: {this.state.person.age}</lable>
                        </div>
                        <div className="row">
                            <lable>Email: {this.state.person.email}</lable>
                        </div>
                    </div>
                    <button className="btn btn" onClick={this.cancel.bind(this)} style={{marginLeft: "10px", background: 'grey'}}>Back</button>
                </div>
            </div>
        );
    }
}

export default ViewPersonComponent;