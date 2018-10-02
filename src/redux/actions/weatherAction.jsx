import axios from "axios";
var iplocation = require('iplocation')

export const weatherHendler = (data) => ({
    type: 'WEATHER',
    data,
})

const url = 'https://api.apixu.com/v1/forecast.json?key=8692627850634df895d103122181209';
const userIp = 'https://api.ipify.org?format=json';  
// const weatherMap = 'https://tile.openweathermap.org/map/temp_new/10/10/11.png?appid=00feee5642e8f33487381f4f168eaa2d'ж

export const SerarchCity = (search) => dispatch => {
    return axios.get(`${url}&q=${search}&days=10`)
        .then(result => dispatch(weatherHendler(result.data)))
        .catch(err => {
            console.error(err)
        }
    )
}

export const weatherUserCity = () => dispatch => {
    axios.get(userIp)
        .then(data => iplocation(data.ip)
        .then(res => {
            console.log(res)
            axios.get(`${url}&q=${res.city}&days=10`)
                    .then(result => dispatch(weatherHendler(result.data)))  
        })
        .catch(err => {
            console.error(err)
        })
    )
} 







