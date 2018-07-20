import { combineReducers } from 'redux';

// Add the Reducer to this main reducer file
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
