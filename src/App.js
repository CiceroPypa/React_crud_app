import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import ListPersonComponent from './components/ListPersonComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreatePersonComponent from './components/CreatePersonComponent';
import UpdatePersonComponent from './components/UpdatePersonComponent';
import ViewPersonComponent from './components/ViewPersonComponent';

function App() {
  return (
    <div> 
      <BrowserRouter>
            <HeaderComponent/>
        <div className="container">
            <Switch> 
                  <Route path="/" exact component={ListPersonComponent}></Route>
                  {/* <Route path="/people/:id" component={UpdatePersonComponent}></Route> */}
                  <Route path="/people/:id" component={ViewPersonComponent}></Route>
                  <Route path="/people" component={ListPersonComponent}></Route>
                  <Route path="/add-person/:id" component={CreatePersonComponent}></Route>

            </Switch>
        </div>
            <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;