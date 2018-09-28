import axios from "axios";

const url = 'https://api.apixu.com/v1/forecast.json?key=8692627850634df895d103122181209';

export const axiosRequest = (weatherHendler, city) => dispatch => {
    return axios.get(`${url}&q=${city}&days=7`)
        .then(result => dispatch(weatherHendler(result.data.first.forecastday))
        .catch(err => {
            console.error(err)
        }))
}