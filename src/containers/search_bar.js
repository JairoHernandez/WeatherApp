import React, { Component } from 'react';
import { connect } from 'react-redux'; // Connects SearchBar(class SearchBar) container to redux(aka promoted to a Container)
import { bindActionCreators } from 'redux'; // bind the action creator fetchWeather as a property to SearchBar container
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: ''};

        // Take existing fuction onInputChange and bind it to this.
        // where this inside bind is SearchBar
        this.onInputChange = this.onInputChange.bind(this); 
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    // This event is just a vanilla JS deal.
    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value }); // Makes input value visible in webpage.
    }

    onFormSubmit(event) {
        event.preventDefault();

        // We need to go and fetch weather data.
        this.props.fetchWeather(this.state.term); // term is what is entered in searchbox.
        this.setState({ term: ''}); // Clear searchbox after users submits city.
;    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit} >
                <input placeholder="Get a 5-day forecast in your favorite cities" className="form-control" value={this.state.term} onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">SUBMIT</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);