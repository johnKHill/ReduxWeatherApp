// Library for AJAX calls/requests in the form of a get from t
//the browser/url supplied, and returns a promise
import axios from 'axios';

// OpenWeatherMap API KEY
import API_Key from '../config/config';

// AJAX getRequest to a URL
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_Key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// ActionCreator
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        // returning the promise as a paylaod
        payload: request
    };
}

