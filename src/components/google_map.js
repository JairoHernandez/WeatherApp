import React, { Component } from 'react';
// No need to import a google map API since it's instead using the script tag in index.html.
// <script src="https://maps.googleapis.com/maps/api/js"></script> 
// which we can easily reference by simply using 'google.maps' in console terminal.

class GoogleMap extends Component {

    // Lifecycle method.
    componentDidMount() { // Called AFTER component has been rendered to screen.
        
        // Creates embedded google map inside our document.
        // this.refs.map is the element on the screen where map will get redered to
        // The element is the one in render() below.
        // This is generally how we make NON-REACT 3rd party libraries work with React.
        new google.maps.Map(this.refs.map, { 
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    // After component has been rendered to the screen you can get direct
    // reference to the full <div> element by referring to this.refs.map.
    render() {
        return <div ref="map" />;
    }
}

export default GoogleMap;