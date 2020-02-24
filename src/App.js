import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css";


import Home from './components/Home'


export default class App extends Component {
  
  render(){
  return (
    
      <div className="container weather-main">
          <Home />
      </div>

   

  );
}
}
