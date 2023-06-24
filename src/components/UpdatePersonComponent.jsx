import React, { Component } from 'react';
import PersonService from '../services/PersonService';
// import { withRouter } from 'react-router-dom';

class UpdatePersonComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            age: '',
            email: ''
        }
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.updatePerson = this.updatePerson.bind(this);
        }

    componentDidMount(){
        PersonService.getPersonById(this.state.id).then( (res) => {
            let person = res.data;
            this.setState({
                name: person.name,
                age: person.age,
                email: person.email
            });
        });
    }

    updatePerson = (e) => {
        e.preventDefault();
        let person = { name: this.state.name, age: this.state.age, email: this.state.email };
        console.log('person => ' + JSON.stringify(person));
        PersonService.updatePerson(this.state.id, person).then( res => {
            this.props.history.push('/people');
        });

    };

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }
    changeAgeHandler = (event) => {
        this.setState({age: event.target.value});
    }
    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/people');
    }

    render() {
        return (
            <div>
                <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3"> 
                                <h3 className="text-center">Add Person</h3>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <lable>Name</lable>
                                            <input placeholder="Name" name="name" className="form-control"
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <lable>Age</lable>
                                            <input placeholder="Age" name="age" className="form-control"
                                                value={this.state.age} onChange={this.changeAgeHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <lable>Email</lable>
                                            <input placeholder="Email" name="email" className="form-control"
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updatePerson}>Update</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                                    </form>
                                </div>
                            </div>

                        </div>


                </div>
            </div>
        );
    }
}

export default UpdatePersonComponent;