import axios from "axios";
var iplocation = require('iplocation')

export const weatherHendle = (data) => ({
    type: 'WEATHER',
    data,
})
 
const url = 'https://api.apixu.com/v1/forecast.json?key=8692627850634df895d103122181209';
const userIp = 'https://api.ipify.org?format=json';  

export const SerarchCity = (search) => dispatch => {
    return axios.get(`${url}&q=${search}&days=7`)
        .then(result => dispatch(weatherHendle(result.data.forecast.forecastday), console.log(result)))
}

export const weatherUserCity = () => dispatch => {
    axios.get(userIp)
        .then(data => iplocation(data.ip)
        .then(res => {
            axios.get(`${url}&q=${res.city}&days=7`)
                    .then(result => dispatch(weatherHendle(result.data.forecast.forecastday),console.log(result.data.forecast.forecastday)))  
        })
        .catch(err => {
            console.error(err)
        })
    )
} 
weatherUserCity();




