import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {

    renderWeather(cityData) {
        
        const name = cityData.city.name;
        
        return (
            <tr key={name}>
                <td>{name}</td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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

