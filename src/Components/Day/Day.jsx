import React from 'react';
import './Day.css'
import drop_per_sent from './drop_per_sent.svg';
import drop from './drop.svg';
import wind from './wind.svg';


const Day = (props) => {
    let date = (props.date).slice(-5);
    

    function getDay() {
        let timestamp = props.dateEpoch;
        let a = new Date(timestamp*1000);
        let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        let dayOfWeek = (days[a.getDay()]);
        return dayOfWeek;
    }

    return (
        <li className='day__card'>
            <div className='day__week'>
                <p className='week'>{getDay()}</p>
                <p className='date'>{date}</p>
            </div>
            <div className='img__container'>
                <img className='day__img' src={props.img} alt="png"/>                
            </div>
            <div className='temp__container'>
                <p className='temp__min'>{Math.round(props.mintemp)}°C</p>
                <p className='temp__max'>{Math.round(props.maxtemp)}°C</p>
            </div>
            <div className='day__other'>
                <div className='wind__container'>
                    <img className='weather__icon' src={wind} alt="img"/>
                     <p className='day__wind'>{props.wind} km/h</p>
                </div>
                <div className='precip__container'>
                    <img className='weather__icon' src={drop_per_sent} alt="img"/>
                    <p className='day__precip'>{props.totalprecip} mm</p>

                </div>
                <div className='avghumidity__container'>
                    <img className='weather__icon' src={drop} alt="img"/>
                    <p className='day__avghumidity'>{props.avghumidity}%</p>
                </div>

            </div>
        </li>
    )
}
export default Day;