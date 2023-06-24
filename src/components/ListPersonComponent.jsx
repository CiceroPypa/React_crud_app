import React, { Component } from 'react';
import PersonService from '../services/PersonService';

class ListPersonComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            people: []
        }
        this.addPerson = this.addPerson.bind(this);
        this.editPerson = this.editPerson.bind(this);
        this.deletePerson = this.deletePerson.bind(this);
    }

    viewPerson(id){
        this.props.history.push(`people/${id}`);
    }

    deletePerson(id){
        PersonService.deletePerson(id).then((res) => {
            this.setState({people: this.state.people.filter(person => person.id !== id)});
        });
    }

    editPerson(id){
        this.props.history.push(`/add-person/${id}`);
    }

    componentDidMount(){
        PersonService.getPeople().then((res) => {
            this.setState({ people: res.data})
        });
    }

    addPerson(){
        this.props.history.push('/add-person/_add'); //***** */
    }

    render() {
        return (
            <div>
                <h2 className="text-center">People List</h2>
                <div className="row">                    
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Person name</th>
                                <th> Person age</th>
                                <th> Person email</th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.people.map(
                                    person => 
                                    <tr key = {person.id}>
                                        <td>{person.name} </td>
                                        <td>{person.age}</td>
                                        <td>{person.email}</td>
                                        <td>
                                            <button style={{marginRight: "10px"}} onClick={ () => this.viewPerson(person.id)} className="btn btn-info">View</button>
                                            <button onClick={ () => this.editPerson(person.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deletePerson(person.id)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>                                                             
                                )
                            }
                        </tbody>
                   </table>
                   <button style={{}} className="btn btn-primary" onClick={this.addPerson}>Add Person</button>
                </div>


            </div>
        );
    }
}

export default ListPersonComponent;