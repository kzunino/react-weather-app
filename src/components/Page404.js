import React, {Component} from 'react'
import {Link} from 'react-router-dom'

// const Page404 = ({ location }) => (
export default class Home extends Component {

   render(){
      return(
         <React.Fragment>
            <div>
               <h2 className='d-block text-center'> Page 404 Error!</h2>
               <h3 className='d-block text-center'>Please click to enter a new zip code!</h3>
               <Link to='/' onClick={ this.refreshPage } className="text-primary d-block text-center">New Zip Code</Link>
            </div>
          </React.Fragment>
      )
   }
   refreshPage = () => {
      this.props.history.push("/")
      window.location.reload();
   }
};
