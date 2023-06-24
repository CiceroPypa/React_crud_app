import axios from 'axios';

const PERSON_API_BASE_URL = "http://localhost:8080/people";

class PersonService {

    getPersonById(personId){
        return axios.get(PERSON_API_BASE_URL + '/' + personId);
    }

    getPeople(){
        return axios.get(PERSON_API_BASE_URL);
    }

    createPerson(person){
        return axios.post(PERSON_API_BASE_URL, person);
    }

    updatePerson(id, person){
        return axios.post(PERSON_API_BASE_URL + '/' + id, person);
    }

    deletePerson(personId) {
        return axios.delete(PERSON_API_BASE_URL + '/' + personId);
    }


}

export default new PersonService()