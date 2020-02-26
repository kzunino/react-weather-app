import React, {Component} from 'react';
import { Link } from 'react-router-dom';


//Weather Icons Import
import { WiDaySunny, WiCloudy, WiThunderstorm, WiRain, WiFog, WiSnow, WiRainMix } from "weather-icons-react";
import Moment from 'react-moment'

export default class Forecast extends Component {


      render(){
        
        let{
            city,
            tempNow,
            tempHigh,
            conditions,
            icon,

            temp2,
            icon2,

            temp3,
            icon3,

            temp4,
            icon4,

            temp5,
            icon5,
        } = this.props

        const shortenDegrees = obj => JSON.stringify(obj).slice(0, 2);
        tempNow = shortenDegrees(tempNow)
        temp2 = shortenDegrees(temp2)
        temp3 = shortenDegrees(temp3)
        temp4 = shortenDegrees(temp4)
        temp5 = shortenDegrees(temp5)

        // icon descriptions used to bind to the correct icon
        let iconArray = [icon, icon2, icon3, icon4, icon5];
        let icons = iconArray.map(icon =>{
            if (icon === "Clear"){
                return <WiDaySunny size={100} color='#000' />
            } else if (icon === "Clouds"){
                return <WiCloudy size={100} color='#000' />
            } else if (icon === "Snow"){
                return <WiSnow size={100} color='#000' />
            } else if (icon === "Rain"){
                return <WiRain size={100} color='#000' />
            } else if (icon === "Drizzle"){
                return <WiRainMix size={100} color='#000' />
            } else if (icon === "Thunderstorm"){
                return <WiThunderstorm size={100} color='#000' />
            } else {
                return <WiFog size={100} color='#000' />
            }
        })

      return (
          <React.Fragment>
            <div className="weather-content">
              <div className="date-city">
                <p className="text-secondary mt-2 mb-0 date"><Moment format="MMM Do[,] YYYY"></Moment></p>
                <h5 className="city">{city}</h5>
              </div>
              <div className="row temp">
                <div className="col-6">
                  <h1 className="text-center">{tempNow}&deg;</h1>
                </div>
                <div className="col-6 text-center">
                  <p className="mt-5 mb-0">{conditions}</p>
                  <p className="text-secondary m-0">with a high of {tempHigh}&deg;</p>
                </div>
              </div>
            </div>
            <div className="forecast-main">
              <div className="row justify-content-between text-center">
                <div className="col-2 day">
                  <p className="text-secondary mt-2">Today</p>
                  <div className="icon">
                    {icons[0]}
                  </div>
                  <div className="day-temp mt-3">
                    <p className="font-weight-bold">{tempNow}&deg;</p>
                  </div>
                </div>
                <div className="col-2 day">
                  <p className="text-secondary mt-2"><Moment add={{days: 1 }}format="ddd"></Moment></p>
                  <div className="icon">
                    {icons[1]}
                  </div>
                  <div className="day-temp mt-3">
                    <p className="font-weight-bold">{temp2}&deg;</p>
                  </div>
                </div>
                <div className="col-2 day">
                  <p className="text-secondary mt-2"><Moment add={{days: 2 }}format="ddd"></Moment></p>
                  <div className="icon">
                    {icons[2]}
                  </div>
                  <div className="day-temp mt-3">
                    <p className="font-weight-bold">{temp3}&deg;</p>
                  </div>
                </div>
                <div className="col-2 day">
                  <p className="text-secondary mt-2"><Moment add={{days: 3 }}format="ddd"></Moment></p>
                  <div className="icon">
                  {icons[3]}
                  </div>
                  <div className="day-temp mt-3">
                    <p className="font-weight-bold">{temp4}&deg;</p>
                  </div>
                </div>
                <div className="col-2 day">
                  <p className="text-secondary mt-2"><Moment add={{days: 4 }}format="ddd"></Moment></p>
                  <div className="icon">
                  {icons[4]}
                  </div>
                  <div className="day-temp mt-3">
                    <p className="font-weight-bold">{temp5}&deg;</p>
                  </div>
                </div>
              </div>
            </div>
            <Link to='/' onClick={ this.refreshPage } className="text-secondary fixed-bottom d-block text-center">New Zip Code</Link>
        </React.Fragment>
        
      );
    }

    refreshPage = () => {
        window.location.reload();
    }
}