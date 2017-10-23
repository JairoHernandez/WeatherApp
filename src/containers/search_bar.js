import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: ''};

        // Take existing fuction onInputChange and bind it to this.
        // where this inside bind is SearchBar
        this.onInputChange = this.onInputChange.bind(this); 
    }

    // This event is just a vanilla JS deal.
    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value }); // Makes input value visible in webpage.
    }

    onFormSubmit(event) {
        event.preventDefault();

        // We need to go and fetch weather data.
    }

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