import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {
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
    return { weather }; // which now becomes this
}

// Connect smartcomponent

export default connect(mapStateToProps)(WeatherList);

