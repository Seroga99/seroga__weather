import React, { Component } from 'react';
import {connect} from 'react-redux';
import { weatherUserCity } from './redux/actions/weatherAction';
import Header from './Components/Header/Header'
import Dayes from './Components/Dayes/Dayes';


class App extends Component {

  componentDidMount() {
    this.props.weatherFetch()

  }

  render() {
    return (
        <div className='wrapper'>
          <div className='app'>
            <Header/>
            <Dayes/>
          </div>
        </div>
    );
  }
}

function MDTP(dispatch)  {
  return {
    weatherFetch: function() {
      dispatch(weatherUserCity())
    }
  }
}
export default connect (null, MDTP)(App);
