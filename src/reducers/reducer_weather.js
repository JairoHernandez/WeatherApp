import { FETCH_WEATHER } from '../actions';

// state=null should eventually be changed to state=[] to list every city.
// we will place cities into array.
export default function(state=[], action) { // state=[] is current list of cities
    console.log('Action received', action);

    switch(action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]); // Goal is to add to list(aka add to state) more cities.
            // Equivalent to this.
            // console.log('REDUCER:', [ action.payload.data, ...state ]);
            return [ action.payload.data, ...state ]; // Flattens this out to [ city, city, city ] not [ city, [city, city,] 
    }
    return state;
}