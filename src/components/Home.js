import React, {Component} from 'react';
import Forecast from './Forecast';
import Form from './Form';
import apiKey from '../config';

export default class Home extends Component {

    state = {
        city: '',
        zip1: '',
        zip2: '',
        zip3: '',
        zip4: '',
        zip5: '',

        day: undefined,

        //Today Big
        tempNow: undefined,
        tempHigh: undefined,
        windSpeed: undefined,

        //Today small
        temp2: undefined,
        icon2: undefined,

        //day three
        temp3: undefined,
        icon3: undefined,

        //day three
        temp4: undefined,
        icon4: undefined,

         //day three
        temp5: undefined,
        icon5: undefined,

        noData: true,
        errors: [],
    }

    render() {
        let { 
            zip1,
            zip2,
            zip3,
            zip4,
            zip5,
            noData,
            errors,
        } = this.state;

        return(
            <div>
                { noData ?
                    <Form submit={this.submit} errors={errors}
                    elements={() => (
                        <React.Fragment>
                        <h5 className="text-center forecast-text">Forecast</h5>
                        <div className="row justify-content-center">
                            <input type="text" maxLength="1" placeholder="0" name="zip1" value={zip1} onChange={this.change}></input>
                            <input type="text" maxLength="1" placeholder="0" name="zip2" value={zip2} onChange={this.change}></input>
                            <input type="text" maxLength="1" placeholder="0" name="zip3" value={zip3} onChange={this.change}></input>
                            <input type="text" maxLength="1" placeholder="0" name="zip4" value={zip4} onChange={this.change}></input>
                            <input type="text" maxLength="1" placeholder="0" name="zip5" value={zip5} onChange={this.change}></input>
                            <button type="submit"></button>
                        </div>
                        </React.Fragment>
                        )}
                    />
                :
                
                <Forecast {...this.state}/>
                }
            </div>
        )
    }

    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(() => {
          return {
            [name]: value
          };
        });
      }

    submit =  async () => {
        let { 
            zip1,
            zip2,
            zip3,
            zip4,
            zip5,
        } = this.state;

        if(!zip1 || !zip2 || !zip3 || !zip4 || !zip5){
            //validations
            this.setState({errors: "validation error"})

        } else if (isNaN(zip1) ||isNaN(zip2) ||isNaN(zip3) ||isNaN(zip4) ||isNaN(zip5)){
            this.setState(prevState => ({
                errors: [...prevState.errors, "validation error"]
              }));
        } else {
            //fetch logic
            await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?zip=${zip1}${zip2}${zip3}${zip4}${zip5}&appid=${REACT_APP_apiKey}&units=imperial`
            )
            .then(response => {
                return response.json()
              })
              .then(response =>{
                this.setState({
            
                    //Today Big
                    tempNow: response.list[0].main.temp,
                    tempHigh: response.list[0].main.temp_max,
                    conditions: response.list[0].weather[0].description,
                    icon: response.list[0].weather[0].main,
            
                    //Today small
                    temp2: response.list[1].main.temp,
                    conditions2: response.list[1].weather[0].description,
                    icon2: response.list[1].weather[0].main,
            
                    //day three
                    temp3: response.list[2].main.temp,
                    conditions3: response.list[2].weather[0].description,
                    icon3: response.list[3].weather[0].main,
            
                    //day three
                    temp4: response.list[3].main.temp,
                    conditions4: response.list[3].weather[0].description,
                    icon4: response.list[3].weather[0].main,
            
                     //day three
                    temp5: response.list[4].main.temp,
                    conditions5: response.list[4].weather[0].description,
                    icon5: response.list[4].weather[0].main,

                    city: response.city.name,
                    noData: false,
                    errors: "",
                });
              }).catch(err => this.setState({errors: "err"}))
    }
}
}