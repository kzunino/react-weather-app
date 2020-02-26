import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Home from './components/Home';
import Page404 from './components/Page404';

export default class App extends Component {
  
  render(){
  return (
    <Router>
      <div className="container weather-main">

        <Switch>
          
              <Route exact path='/' component={Home}/>
              <Route component={Page404} />

              <Redirect to='/notfound' />

        </Switch>
      </div>

    </Router>
   

  );
}
}
