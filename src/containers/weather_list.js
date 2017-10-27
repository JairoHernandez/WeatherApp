import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    renderWeather(cityData) {
        
        console.log('CITYDATA:',cityData);
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        console.log('TEMPS:', temps);
        
        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="orange" units="K"/></td>
                <td><Chart data={pressures} color="green" units="hPa"/></td>
                <td><Chart data={humidities} color="black" units="%"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
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

// IF state ever changes component WeatherList will auto re-render with new weather list.
// Whatever is returned will show up as props inside of WeatherList.
function mapStateToProps({ weather }){ // changed passed in 'state' to '{ weather }' which is same as const weather = state.weather;
    /** These are all equivalent */
    //return { weather: state.weather } // state.weather is from combineReducers in reducers/index.js
    //return { weather: weather }; // which now becomes this thanks to '{ weather }' equaling const weather = state.weather
    console.log('MAPSTATETOPROPS:', { weather });
    return { weather }; // which now becomes this
}

// Connect smartcomponent

export default connect(mapStateToProps)(WeatherList);

