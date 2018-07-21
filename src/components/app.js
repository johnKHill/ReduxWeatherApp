import React from 'react';
import { Component } from 'react';

//Render te container view for the SeachBar
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';



export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
