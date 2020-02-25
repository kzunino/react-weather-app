import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './components/Home'

export default class App extends Component {
  
  render(){
  return (
    <Router>
      <div className="container weather-main">

        <Switch>
          
              <Route exact path='/'  component={Home}/>

        </Switch>
      </div>

    </Router>
   

  );
}
}
