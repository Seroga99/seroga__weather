import React from 'react';
import { connect } from 'react-redux';
import { getValue } from '../../../redux/actions/inputAction';
import { SerarchCity } from '../../../redux/actions/weatherAction';
import './FormSearch.css';
import search from './search.svg';

const FormSearch = (props) => {
    
    const getInpValue = (e) => {
        const value = e.target.value;
        props.getValue(value)
    }
    const SerarchCity = (e) => {
        e.preventDefault();
        props.SerarchCity(props.value)
    }   
    return (
        <div>
            <form onSubmit={SerarchCity} className='form'>
                <input placeholder='Enter your city...' type="text" onChange={getInpValue} className='form__input'/>
                <button className='form__btn' type="submit"><img className='btn__img' src={search} alt="search"/></button>
            </form>
        </div>
    )
}
function mapStateToPeops (state) {
    return {
        value: state.value
    }
} 
function mapDispatchToProps (dispatch) {
    return {
        getValue: function(value) {
            dispatch(getValue(value))
        }, 
        SerarchCity: function(search) {
            dispatch(SerarchCity(search))
        },
    }
}
export default connect (mapStateToPeops, mapDispatchToProps) (FormSearch)