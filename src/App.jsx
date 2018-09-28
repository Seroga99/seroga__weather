import React, { Component } from 'react';
import {connect} from 'react-redux';
import { weatherUserCity } from './redux/actions/weatherAction';
import Header from './Components/Header/Header';
import Dayes from './Components/Dayes/Dayes';
// import MainInform from './Components/MainInform/MainInform';

class App extends Component {



  
  componentDidMount() {
    this.props.weatherFetch();
  }

  render() {
    {var time = new Date().getHours()}  
    return (
    
      <div className= {time > 19 || time < 7 ? 'bgc__night app' : 'bgc__day app' }>
        <Header/>
        <div className='wrapper'>
            <Dayes/>
        </div>
      </div>
    );
  }
}

function MSTP(state){
  return {    
      weather: state.weather,
  }
}

function MDTP(dispatch)  {
  return {
    weatherFetch: function() {
      dispatch(weatherUserCity())
    }
  }
}
export default connect (MSTP, MDTP)(App);



