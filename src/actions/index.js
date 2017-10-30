import axios from 'axios';
const API_KEY = '7960c1b1b4718b05110e495c2f37e1ac';
const ROOT_URL = `httpss://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    console.log('URL:', url);
    const request = axios.get(url);

    // console.log('REQUEST:', request);   

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
    
// 10:42 axios