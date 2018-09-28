import React from 'react';
import {connect} from 'react-redux';
import './MainInform.css';

const MainInform = (props) => {
    console.log(props.weather);
    return (
        <div>   
                {Object.keys(props.weather).length > 0 ? 
                <div className='mainInfo__container'>
                    <p className='maininfo__info'>{props.weather.current.temp_c}°C | {(props.weather.current.last_updated).slice(-6)} | {props.weather.current.wind_kph} km/h | {props.weather.current.condition.text}</p>
                    <p className='maininfo__weather'> <span className='font-weight'>Weather</span> {props.weather.location.name}</p>
                    <p className='maininfo__location'>{props.weather.location.region}, {props.weather.location.country}</p>
                    
                </div>
                : null   
                }
                
        </div> 
    )   
}

function MSTP (state){
    return {    
        weather: state.weather,
    }
}
export default connect(MSTP, null)(MainInform);