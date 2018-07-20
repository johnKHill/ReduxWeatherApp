import React, { Component } from 'react';
// Wire-up and "connect" Redux and,
// import the ActionCreators fetchWeather
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    
    // Input Event Handler Method for "onChange"
    onInputChange(event) {
        // console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    // Form Event Handler Method for "onSubmit"
    onFormSubmit(event) {
        event.preventDefault(); // tells the browser to 'not' submit the form

        // Need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }



    // Render this method for the search bar
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form> 
        );
    }
}

// Method to return an object ie.(fetchWeather), 
// which is an ActionCreator that needs to be binded by
// using dispatch
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);