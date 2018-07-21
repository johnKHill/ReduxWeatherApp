import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from "../components/google_map";



class WeatherList extends Component {
    // This function renders a single city
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => 9 / 5 * (weather.main.temp - 273.15) + 32);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;



        return (
            <tr key={name}>
               <td><GoogleMap lon={lon} lat={lat}/></td> 
               <td><Chart data={temps} color="orange" units="°F" /></td> 
               <td><Chart data={pressures} color="green" units="hPa" /></td> 
               <td><Chart data={humidities} color="black" units="%" /></td> 
            </tr>
       ); 
    }



    render() {
    return (
        <table className="table table-hover">
        <thead>
            <tr>
                <th>City</th>
                <th>Temperature (°F)</th>
                <th>Pressure (hPa)</th>
                <th>Humidity (%)</th>
            </tr>
        </thead>
        <tbody>
                {this.props.weather.map(this.renderWeather)}
        </tbody>
        </table>
    );
  }
}

function mapStateToProps({ weather }) {
    return { weather };
}

// Connect the component (WeatherList) with the map function (MapStateToProps)
// Once this is completed, there is no need to "export" WeatherList as the default component anymore
export default connect(mapStateToProps)(WeatherList);