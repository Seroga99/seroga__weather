import React from 'react';
import {connect} from 'react-redux';
import Day from '../Day/Day';
import './Dayes.css';

const Dayes = (props) => {
    return (
        <ul className='days__list'> {
            Object.keys(props.weather).length > 0 ? props.weather.forecast.forecastday.map(el => 
                    <Day date={el.date}
                        mintemp={el.day.mintemp_c} 
                        maxtemp={el.day.maxtemp_c}
                        wind={el.day.maxwind_kph}
                        img={el.day.condition.icon}
                        totalprecip={el.day.totalprecip_mm} 
                        avghumidity={el.day.avghumidity} 
                        dateEpoch={el.date_epoch} 
                        key={el.date_epoch}
                        
                        sunrise={el.astro.sunrise}
                        sunset={el.astro.sunset}
                        moonrise={el.astro.moonrise}
                        moonset={el.astro.moonset}/>
                ) : null
            }
        </ul>
    )   
}

function MSTP (state){
    return {
        weather: state.weather,
    }
}
export default connect(MSTP, null)(Dayes);