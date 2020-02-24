import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css";

//import apiKey from './config'

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from 'react-router-dom';

import Home from './components/Home'
//import Forecast from "./components/Forecast";


export default class App extends Component {
  
  render(){
  return (
    
      <div className="container weather-main">
          <Home />
      </div>

   

  );
}
}
